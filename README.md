# task-management

---

## Requirements
Make sure to install the following programs:
- Docker
- Node.js
- Java 11
- Gradle

---
## Run the application

* Make sure to clone this project to your local machine

1. Navigate to the `scrips` directory
2. Execute the `run-postgres-container` script to boot up the Postgres database
3. Execute the `run-flyway-migration` script to migrate all the SQL information to Postgres database
4. Execute the `run-server` script to boot up the back-end (Spring Boot microservice)
5. Install all Node.js packages by executing `install-nodejs-packages` script
6. Execute the `run-front` script to start React application which once the React application is booted up, access to http://localhost:3000
