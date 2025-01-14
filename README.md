# Employee Management CRUD Application

## Overview

This is a backend application built with TypeScript, Node.js, and Express.js for managing employee records. It provides a RESTful API with CRUD (Create, Read, Update, Delete) operations to manage employee data.

## Live Demo

You can access the live API at: [Employee Management API](https://employee-management-typescript.onrender.com)

## Features

- **Add Employee**: Create new employee records.
- **Read Employees**: Retrieve a list of all employees.
- **Update Employee**: Modify existing employee records.
- **Delete Employee**: Remove employee records.
- **Search Employee**: Find employees by name.

## Tech Stack

- TypeScript
- Node.js
- Express.js

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Auro-ra9/employee_management_typescript.git
   cd employee_management_typescript

2. Install dependencies: npm install
3. Build the project: npm run build
4. Start the server: npm start
5. The server will run on http://localhost:8000.

API Endpoints
1. Add Employee
Endpoint: POST /add-employee
Request Body:
json


{
  "employeeId": 1,
  "name": "John Doe",
  "age": 30,
  "position": "Developer",
  "salary": 60000
}
2. Read Employees
Endpoint: GET /read-employee
Response:
json


[
  {
    "employeeId": 1,
    "name": "John Doe",
    "age": 30,
    "position": "Developer",
    "salary": 60000
  }
]
3. Update Employee
Endpoint: PUT /update-employee/:id
Request Body:
json


{
  "name": "John Smith",
  "age": 31,
  "position": "Senior Developer",
  "salary": 70000
}
4. Delete Employee
Endpoint: DELETE /delete-employee/:id
5. Search Employee
Endpoint: GET /search-employee?name=John
Testing the API
You can test the API using tools like Postman or cURL. Here are some example requests:

Example cURL Commands
Add Employee:


curl -X POST https://employee-management-typescript.onrender.com/add-employee -H "Content-Type: application/json" -d '{"employeeId": 1, "name": "John Doe", "age": 30, "position": "Developer", "salary": 60000}'
Read Employees:


curl -X GET https://employee-management-typescript.onrender.com/read-employee
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

License
This project is licensed under the MIT License - see the LICENSE file for details.



### How to Use This README

1. **Copy and Paste**: Copy the above markdown text and paste it into a new file named `README.md` in the root of your project.
2. **Customize**: Modify any sections as needed, especially the API endpoints and example requests to match your actual implementation.
3. **Add Images**: If you have any screenshots or diagrams, you can add them to the repository and link them in the README.

### Testing the API

Since your application is a backend service without a frontend, you can test it using Postman or cURL as described in the README. This will allow you to verify that all endpoints are functioning correctly.

### Conclusion

This README will help you present your project effectively in your resume and portfolio. If you have any further questions or need additional modifications, feel free to ask! ```markdown
# Employee Management CRUD Application
