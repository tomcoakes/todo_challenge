# Todo Challenge

![Travis build](https://travis-ci.org/tomcoakes/todo_challenge.svg?branch=master)
[![Code Climate](https://codeclimate.com/github/tomcoakes/todo_challenge/badges/gpa.svg)](https://codeclimate.com/github/tomcoakes/todo_challenge)

## Synopsis
Described as "The 'Hello world' for MV* frameworks", this solo project was a great introduction to using Angular, testing in JavaScript using both Karma and Protractor, and managing the structure of a node back-end (despite the fact that I didn't get around to implementing a database). My brief for this project [can be found here.](https://github.com/makersacademy/todo_challenge)

## Technologies Used

- AngularJS
- node.js with express.js
- Testing with Jasmine, Protractor
- Test suite managed with Karma and a Java Selenium server
- Bower and npm
- Templating with ejs and Jade


## Application Screenshot

![App Screenshot](https://raw.githubusercontent.com/tomcoakes/todo_challenge/master/node_server/public/images/todo-screenshot.png)



## Further Refactoring Opportunities

- There is more that could be done to extract some of the code within the view out to either the controller or the models themselves.
- Although I have travis running on this project, I'm not currently using it to deploy to Heroku. This is because I've had serious problems getting a selenium server to work correctly and so my test suite is not run automatically by travis. I've spoken to many people about this problem, and I may have discovered a solution that I will hopefully have time to implement. Continuous integration makes me happy.
* My implementation for marking tasks as complete isn't ideal, and breaks in some edge cases, so I plan to rewrite this and find a more solid method than just monitoring for the checkbox to be clicked.

## Takeaway

- Deploying to Heroku initially caused me some confusion, as there was a conflict with bower and npm. In order to fix the issues I was having, bower had to be loaded in as an npm dependency so that Heroku could build the application correctly.
* I completely test-drove the project with an outside-in approach, using protractor for feature tests and then moving on to jasmine unit tests when necessary. I feel confident about using this approach in future projects.
* I created an express/node server because I plan to integrate a database at a later time.
