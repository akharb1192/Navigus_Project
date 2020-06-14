# Navigus_Project
# Navigus Scheduler 

This application is developed in interest of scheduling of events of particular people for a common task so they can visualluy see other schedules and they don't collide with each other

## Getting Started

Following are the details you need to run the project

### Prerequisites

What things you need to install the software and how to install them

```
NodeJS
Use React Library
Firebase
Heroku
Set the firebase authentication using Google, Facebook, Github, and via Email
```

### Installing

A step by step series of examples that tell you how to get a development env running

```
cd navigus
npm install
```

and then run the server on localhost port 

```
npm start
```

End with an example of getting some data out of the system or using it for a little demo

## Authentication Page

![git1](https://user-images.githubusercontent.com/40290144/84584943-d0e75300-ae27-11ea-87c8-be9d0b7cfc7d.JPG)

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Deploy the application on Heroku. Heroku gives platform as a service for deployment of cloud based applications.

Navigate to the project and initialize a git repository 
Login to Heroku via CLI
Confirm on the browser window
```
cd navigus
git init
heroku login
```
Add the files to the git
Commit the status there with a message

```
git add .
git commit -m"Initial Commit"
```
Deploy the application using the following command
Scale the dynos to ensure atleast one instance of application is running

```
git push heroku master
heroku ps:scale web=1
```
Open the application via following command or link provided at the CLI

```
heroku open
```

## Built With

* [ReactJS](https://github.com/facebook/create-react-app) - The web framework used
* [Syncfusion](https://www.npmjs.com/package/@syncfusion/ej2) - Dependency Management
* [Heroku](https://www.heroku.com/) - Used to Deploy the Project
 

## Authors

* **Ankit** - *Student, Developer* - [Ankit](https://github.com/akharb1192)



## Acknowledgments

* Firebase tutorials
* Heroku Guide
