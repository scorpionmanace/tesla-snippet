# Tesla-Snipper


##Instruction to Excute##

Since, this application is created using MeteorJS (Full Stack Application Development Framework).

There are few commands needs that will be required to executed.

1. Installing Meteor on you system
  1. If is Mac OS-X  or Linux
    - Just execute this command on terminal
    - $curl https://install.meteor.com/ | sh
  2. For windows, Follow this link for installation of meteor
    - [https://www.meteor.com/install]

2. When the installation is done,
  - Thank you might need to either clone this project from Github link or make a zip download of the project and extract it to a particular position
  -   Than navigate to the extracted position of the folder
  -   Ex. ~/users/<username>/Desktop/tesla/

3. After going into the application, you just have to start server
  - on terminal run the following command inside the folder directory
  - $ **meteor**
  
4. Open Chrome/Safari and open url 
  - **localhost:3000**


####Now you are ready to excute the application####

This meteor application uses AngularJS as well.

So, if needed you might have to remove blaze template dependency and ECMAScript dependency
Than can be done with following command
- $ **meteor remove blaze-html-templates**
- $ **meteor remove ecmascript**
-  *Note*: **remember to execute all the commands inside the application root.**

After this there might be a need to add angular dependency
Following command can be used to add angular dependency
-  $ meteor add angular

##Structure##
Client - Contains all the Client files i.e. HTML, CSS, JS
Public - Contains background image in img folder, image source from Tesla home page
Server - contains server.js to execute server side code of the application
Private - contains private files such as JS files, Wireframe, Docs etc.


