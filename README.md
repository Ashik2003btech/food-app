# Food App

A simple food ordering backend application built using Node.js, Express.js, and MongoDB.

## Features
- User authentication (register, login)
- User profile management
- Secure password hashing using bcrypt
- JWT-based authentication
- Database integration with MongoDB
- REST API endpoints for user operations

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Ashik2003btech/food-app.git
   cd food-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=8080
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Start the server:
   ```sh
   npm run server
   ```

## API Endpoints

### Authentication Routes
- **POST** `/api/v1/auth/register` - Register a new user
- **POST** `/api/v1/auth/login` - User login

### User Routes
- **GET** `/api/v1/user/getUser` - Get user details (Protected Route)
- **PUT** `/api/v1/user/updateUser` - Update user details (Protected Route)
- **POST** `/api/v1/user/resetPassword` - Reset user password (Protected Route)

### Test Route
- **GET** `/api/v1/test/test-user` - Test API route

## Project Structure
```
food-app/
│-- controllers/
│   ├── authControllers.js
│   ├── userController.js
│   ├── testController.js
│
│-- models/
│   ├── userModel.js
│
│-- routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── testRoutes.js
│
│-- middlewares/
│   ├── authMiddleware.js
│
│-- config/
│   ├── db.js
│
│-- server.js
│-- package.json
│-- .env
│-- README.md
```

## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt.js for password hashing
- Morgan for logging
- Dotenv for environment variables

## Author
**Mohamed Ashik**

## License
This project is licensed under the ISC License.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

Now you can push this project to GitHub:
```sh
git add .
git commit -m "Initial commit"
git push origin main
```

