# Chat feature - Proof of Concept

Welcome to this POC about chat feature.  

This projet is the back part of a global project.  
To see the global information about this project, go [there](../README.md) !

## Dependencies

This project is using java 17 and MySQL.


## Installation

This project need a MySQL database.  
To install the project, you have to add environmental variables in your configuration :
- `DATABASE_USERNAME` as your database username
- `DATABASE_PASSWORD` as your database password
- `JWT_KEY` as the key used to encode the JWT token. It must be sufficiently long.  
  (example : `ThisIsASecretKeyThatIsAtLeast32BytesLong1545135951695622156622`)

Go to the "poc-back" folder.  

- `mvn clean install` allows you to install the project.  
- `mvn spring-boot:run` allows you to launch the back-end. The main method is SpringBootSecurityJwtApplication.

The server run on the port 3004.
