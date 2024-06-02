# mernBackend Backend

This is the backend service for the FMovies application. It provides authentication, movie wishlist management, and integration with external movie databases.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (signup and login)
- Manage movie wishlists
- Integration with the OMDB API for movie data

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Axios

## Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/rishi-o2/mernBackend
    
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

    ```sh
    PORT=5000
    MONGO_URI=your_mongo_database_uri
    JWT_SECRET=your_jwt_secret
    
    ```

4. **Run the server:**

    ```sh
    nodemon server.js
    ```

   The server should now be running on `http://localhost:5000`.

## Environment Variables

- `PORT`: The port number on which the server runs (default: 5000).
- `MONGO_URI`: The connection string for MongoDB.
- `JWT_SECRET`: Secret key for signing JWT tokens.


## API Endpoints

### Auth

- **POST /api/auth/signup**
  - Description: Register a new user
  - Request body: `{ name, email, password }`

- **POST /api/auth/login**
  - Description: Authenticate a user
  - Request body: `{ email, password }`

### Wishlist

- **GET /api/wishlist/:userId**
  - Description: Get all wishlist items for a user
  - Params: `userId`

- **POST /api/wishlist/add**
  - Description: Add a movie to the wishlist
  - Request body: `{ userId, movieId }`

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
