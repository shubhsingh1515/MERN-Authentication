# MERN Authentication System

A secure authentication system built using the MERN stack, enabling users to register, log in, and reset their passwords. The application uses JWT for authentication and implements email-based password recovery.

<p align="center">
  <img src="client/public/img1.jpg" alt="Authentication System" />
</p>

## Features

- **User Registration**: Allows new users to create an account with secure password hashing.
- **Login System**: Authenticates users using JWT and maintains session security.
- **Password Recovery**: Enables users to reset their passwords via email links.
- **Protected Routes**: Provides restricted access to specific pages or features for authenticated users only.
- **Responsive Design**: Includes a user-friendly and responsive interface for seamless interaction.

## Tools and Technologies

- **React.js**: For building the frontend user interface.
- **Node.js**: For backend server and API handling.
- **Express.js**: A web framework for handling routes and middleware.
- **MongoDB**: Database for storing user credentials and data.
- **JWT (jsonwebtoken)**: For secure user authentication and session management.
- **bcrypt**: For hashing passwords to ensure security.
- **Nodemailer**: For sending password recovery emails.
- **dotenv**: For managing environment variables.

## Deployment

- **Frontend**: Deployed on Render, Vercel, or Netlify with a responsive React.js interface.
- **Backend**: Deployed on Render or Railway for handling APIs and server-side logic.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/shubhsingh1515/MERN-Authentication.git
2. Install backend dependency:
   cd server
   npm install
3. Set up environment variables by creating a .env file in the server directory:
  - **JWT_SECRET=<your_jwt_secret>**
  - **MONGO_URI=<your_mongodb_connection_string>**
  - **EMAIL_USER=<your_email>**
  - **EMAIL_PASSWORD=<your_email_password>**
4. Install frontend dependencies:
   cd client
   npm install
## 5. Start the development server:
  - **For backend**:
    ```bash
    cd server
    npm start
    ```
  - **For frontend**:
    ```bash
    cd client
    npm run dev
    ```



