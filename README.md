# Weather App Backend

This is the backend server for a Weather Application, built with Node.js, Express, and TypeScript.

## Description

This Weather App Backend provides API endpoints for weather data retrieval, user authentication, and other related functionalities. It's designed to work in conjunction with a frontend application to provide a complete weather information service.

## Features

- Weather data retrieval using https://www.weatherapi.com/
- User authentication JWT
- RESTful API
- Swagger documentation
- MongoDB integration
- Jest testing suite

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v18 or later)
- npm (v8 or later)
- MongoDB

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/geethwish/weather-app-backend.git
   ```

2. Navigate to the project directory:

   ```
   cd weather-app-backend
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add necessary environment variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Usage

To run the server in development mode:

```
npm run dev
```

To build the TypeScript files:

```
npm run build
```

To start the server in production mode:

```
npm start
```

To run tests:

```
npm test
```

## API Documentation

API documentation is available via Swagger UI. After starting the server, navigate to:

```
http://localhost:3000/api-docs
```

## Scripts

- `npm start`: Starts the server using Node.js
- `npm run dev`: Starts the server using nodemon for development
- `npm run build`: Compiles TypeScript to JavaScript
- `npm test`: Runs the Jest test suite

## Dependencies

- Express.js: Web application framework
- Mongoose: MongoDB object modeling
- JWT: JSON Web Token for authentication
- Bcrypt: Password hashing
- Axios: HTTP client for API requests
- Swagger: API documentation
- Jest & Supertest: Testing framework

## Author

Geeth Wishkamal

## License

This project is licensed under the MIT License.
