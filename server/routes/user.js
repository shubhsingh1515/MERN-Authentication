import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const router = express.Router();


router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error); 
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.KEY, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    return res.json({ message: 'Logged in successfully' });
  } catch (error) {
    console.error('Error during login:', error); // Log the error
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  console.log("Received email:", email); // Log incoming email

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User does not exist");
      return res.status(400).json({ message: 'User does not exist' });
    }

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shubh.bhu.varanasi@gmail.com',
        pass: process.env.PASSWORD ,
      }
    });
    
    var mailOptions = {
      from: 'shubh.bhu.varanasi@gmail.com',
      to: email,
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
  } catch (error) {
    console.error('Error in forgot-password API:', error); // Log the full error stack
    return res.status(500).json({ message: 'Internal server error' });
  }
});



router.post('/reset-password', async (req, res) => {
  const { password, token } = req.body;

  try {
    // Verify the reset token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user's password in the database
    await User.findByIdAndUpdate(userId, { password: hashedPassword });

    return res.status(200).json({ success: true, message: 'Password reset successful' });
  } catch (error) {
    console.error('Error during password reset:', error);
    return res.status(500).json({ success: false, message: 'Internal server error or token not matches' });
  }
});



export default router;
