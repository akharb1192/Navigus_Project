# Navigus Scheduler 

This application is developed in interest of scheduling of events of particular people for a common task so they can visualluy see other schedules and they don't collide with each other

A working version of this application is deployed at https://navigusmaster.herokuapp.com/

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


### Home Page with name and picture of the user account 


![git2](https://user-images.githubusercontent.com/40290144/84584980-1dcb2980-ae28-11ea-81ee-a4ccad6e94c4.JPG)


### Calendar events can viewed by means of day, month etc.


![git3](https://user-images.githubusercontent.com/40290144/84585016-a944ba80-ae28-11ea-93f1-28ca7e3372f7.JPG)


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

## About data

The data about the schedules in the project is static and is saved as an XML file on the web. We can extend the project by writing the module to write to a particular file on setting the event and accessing the same for showing it to the users.


## Built With

* [ReactJS](https://github.com/facebook/create-react-app) - The web framework used
* [Syncfusion](https://www.npmjs.com/package/@syncfusion/ej2) - Dependency Management
* [Heroku](https://www.heroku.com/) - Used to Deploy the Project
 

## Authors

* **Ankit** - *Student, Developer* - [Ankit](https://github.com/akharb1192)



## Acknowledgments

* Firebase tutorials
* Heroku Guide
