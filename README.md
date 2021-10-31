## Weekend Redux Feedback loop
Input field application 
Duration: Weekend project 10-20 hours

This project helps the user to give feedback and reflect on how an experience is going. In Prime we use these feedback reviews everyday to take stock in how we're feeling to gain an awareness of our present situation.  

## Screen Shot
<img src="Feedback.png">

## Prerequisites

Css3
HTML5
JavaScript
jQuery
Material-UI
Node.js
PostgreSQL
React
Redux


## Installation

To get started with the Redux Feedback Loop you will need to fork and clone the repo to your local computer.  

Create a database using data.sql to make a database, I recommend using Postico. This application was built using Postgres, so you'll want to make sure you have that installed.  

Use which ever IDE you like.  This application was built with VS Code.  
To get the application launched you will need to do an npm install. install react-router-dom, react-redux, redux, redux-logger, body-parser.  
Then you can start the server npm run server and then npm run client and your application should load on the default browser. 


## Usage
The main use of this application is to document feedback.  It's a very simple questionare that takes in numbers 1-5 and some text.  Taking a moment to fill out the text fields, the user engages in self reflection.  How are you feeling,  do you feel supported, are you understanding, and do you have any comments or input? 
The User lands on a page that hols the first question of the feedback questions,  how are you feeling. 
The user can then type in or scroll to a number 1-5 
It is assumed that user will know 1 is poorly, 5 is incredible.
Once a number is selected that meets the criteria 1-5 the user clicks the button "next"
After filling out each question, the user will be brought to a page for review. 
Once reviewed the user will submit their inputs. 
The submit button brings the user to a success page. 
On the success page the user can chose to click the but "start a new form"
This "Start a new form" button will lead the user back to the first question with cleared inputs. 

## Built With
Css3
HTML5
JavaScript
jQuery
Material-UI
Node.js
PostgreSQL
React
Redux
MUI 
Postman 


## Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. Thank you to my instructors Dane, Liz, and Kris. The Solianas cohort, and all of those who hopped on zoom to collaborate. And to those of you who read through this README, thank you for your time and attention. 
