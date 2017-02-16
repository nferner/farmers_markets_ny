#NY Farmers Markets

For the independent project, I built an app to help locate the nearest NY Farmers Market! For those Saturday morning explorers trying to find the most local and fresh NY has to offer. The App is fairly simple: </br>
*   Open up the App for a google map geolocation of your position.</br>
*   Find the closest marker on the App and click.</br>
*   When the marker is clicked the market's information will render, including address, hours/season and webisite.</br>

Give it a try <a href="https://crank-o-meter.herokuapp.com/">here!</a></br>

##Technologies Used
*   [React](https://facebook.github.io/react/docs/getting-started.html) - used to create a one page app allowing for efficent DOM updates.
*   Javascript - Primary language used for the app. 
*   SQL - Database for NY State farmers market info. 
*   Rails - Backend
*   Object Relational Mapper - our userDAO (Data Access Object) and sentenceDAO act as our ORMs, translating the objects for database consumption.
*   [Nodemailer](https://nodemailer.com/) - allows for the user to email their apology letter created in the app.
*   [Trello](https://trello.com/) - We used trello to direct, organize and manage our ptoject flow. Trello was an essential tool to communicate the progress of the assigned user stories. It was especially helpful when working remotely.
*   [GitHub](https://github.com/) - Used to update, review and merge code for app development and functionality.
*   CSS - Styling for our app as well as making the app responsive for both mobile and web use. After consulting with the UX team, we decided it would best to develop an app that was first mobile responsive. This would align with the targetted user's intent.
*   HTML


##Approach##
1. 

##Unsolved Problems##
*   Adding Geolocation
*   Rendering information either by maps infowindow or as a click event rendering

##Next Steps##
By meeting with the UX team, we realized what functions were essential to the app and what should be next steps.
*   User access to time stamped letters along with score of their anger that they had at the time.
*   Specific sentences/letters related to situations but also connected to the level of anger. 
*   Feel good videos that can randomize on the page to divert anger. Also rendering of a congratulatory video after the letter is sent.

##Photographic Timeline##

####Initial Sketch of the app
![alt text] (/pics/version1.jpg "Initial Sketch of app")

####Revised app after meeting with UX team
![alt text] (/pics/version2.jpg "Revised app after meeting with UX team")

####Close up of the revised Crank-o-meter
![alt text] (/pics/version2.1.jpg "Close up of app")

####User Stories   
![alt text] (/pics/userStories.jpg "Our user stories")

####Crank-o-meter directory
![alt text] (/pics/directory.png "app directory")

####Initial render with divs
![alt text] (/pics/divColorsRender.png "Initial render of our divs")

##Installation Instructions##
Below you will find a full list of the dependencies used for the crank-o-meter:
*   Babel: core, loader, preset-es2015, preset-react
*   bcrypt
*   body-parser
*   cookie-parser
*   dotenv
*   eslint: airbnb, import, jsx-ally, react
*   express: history-api-fallback, session
*   jsonwebtoken
*   morgan
*   nodemailer
*   pg-promise
*   react: cookie, dom, router
*   superagent
*   webpack: dev-middleware, dev-server, hot-middleware

##Additional Pictures
![alt text] (/pics/wireframe.jpg "front and back")
![alt text] (/pics/db.jpg "first iteration of the databases")
![alt text] (/pics/gamePlan.jpg "Our weekend game plan")
