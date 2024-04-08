# Authentication API

This project is an enhanced backend API for an authentication system, built using Node.js.

## Features

- User registration with email and password
- User login with email and password
- User login or registration with OAuth providers (Google, Facebook, Twitter, GitHub)
- User logout
- User profile management
  - View profile details
  - Edit profile details (photo, name, bio, phone, email, password)
  - Upload new photo or provide image URL
  - Set profile visibility (public or private)
- Admin functionality
  - View both public and private user profiles

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- JSON Web Tokens (JWT) for authentication
- OAuth for third-party authentication
- Bcrypt for password hashing
- dotenv for environment variables
- Other dependencies (listed in package.json)


