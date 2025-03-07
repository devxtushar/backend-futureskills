# Mini HR Dashboard Backend

This is the backend for the Mini HR Dashboard, providing job management, application handling, and user authentication.

## Features

### Job Routes
- `POST /jobs`: Create a new job posting.
- `GET /jobs`: Retrieve all job postings.
- `DELETE /jobs/:id`: Delete a job posting by ID.

### Application Routes
- `POST /applications`: Submit a new application.
- `GET /applications`: Retrieve all applications.
- `GET /applications/:id`: Retrieve an application by ID.

### Authentication Routes
- `POST /auth/login`: Authenticate user and issue a JWT.
- `POST /auth/register`: Register a new user.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/devxtushar/backend-futureskills.git
   ```
2. Navigate to the project directory:
   ```sh
   cd backend-futureskills
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

Start the development server with:
```sh
npm run dev 
```


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


