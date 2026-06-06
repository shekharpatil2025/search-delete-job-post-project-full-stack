# Search Delete Job Post Project - Full Stack

## Overview

A full-stack web application that allows users to manage job postings efficiently. The application provides functionality to create, search, view, update, and delete job posts through an intuitive user interface.

## Features

* Create new job postings
* View all available job posts
* Search job posts by keywords
* Update existing job posts
* Delete job posts
* Responsive user interface
* RESTful API integration between frontend and backend

## Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Axios

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Maven

### Database

* PostgreSQL / MySQL (Update based on your project)

## Project Structure

```text
project-root/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── application.properties
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd <project-folder>
```

### Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /jobs      | Get all jobs  |
| GET    | /jobs/{id} | Get job by ID |
| POST   | /jobs      | Create job    |
| PUT    | /jobs/{id} | Update job    |
| DELETE | /jobs/{id} | Delete job    |

## Screenshots

Add application screenshots here.

## Future Enhancements

* User Authentication
* Role-Based Access Control
* Pagination and Sorting
* Advanced Search Filters
* Docker Deployment
* Cloud Deployment

## Author

**Shekhar Patil**

* Java Full Stack Developer
* Spring Boot | React | SQL | PostgreSQL

## License

This project is developed for learning and portfolio purposes.
