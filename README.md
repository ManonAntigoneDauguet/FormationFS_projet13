# Your Car Your Way

## Chat feature - Proof of Concept

Welcome to this POC about chat feature.  
This project allow to have a synchronise communication with two users.  

This project uses Java Spring Boot and Angular technologies.

## Contents 
 - [1 - Back Installation](#1---back-installation)
 - [2 - Front Installation](#2---front-installation)
 - [3 - Test the feature](#3---test-the-feature)

## 1 - Back Installation

This project need a MySQL database.  
To install the project, you have to add environmental variables in your configuration :
- DATABASE_USERNAME as your database username
- DATABASE_PASSWORD as your database password

Go to the "poc-back" folder.  

- `mvn clean install` allows you to install the project.  
- `mvn spring-boot:run` allows you to launch the back-end. The main method is SpringBootSecurityJwtApplication.

The server run on the port 8080.

## 2 - Front Installation

Go to the "front" folder.

`npm install` allows you to install dependencies.  
`npm run start` allows you to launch the front-end.   

The server run on the port 4200.  
You can now test the feature on the web site [Your Car Your Way - Chat POC](http://localhost:4200).

## 3 - Test the feature

- After [installations](#installation), open one windows on [the web site of the POC](http://localhost:4200).
- Open a second window on private navigation.
- On each window you can register you or use the default profiles.
- Enjoy !

### Default profiles :

- **User 1**
  - email : yugi@magasin-de-jouet.fr  
  - password : yugi!1

- **User 2**
  - email : kaiba@kaiba-corp.com  
  - password : kaiba!1