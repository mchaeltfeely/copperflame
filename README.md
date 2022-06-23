# copperflame

Witherslack Project

Finished Application available at : http://copperflames.co.uk/

# Summary

To complete the interview process I have been asked to develop a stand alone application that will show off my development abilities. 
# Brief
The brief provided to me was to develop a user interface to a json data set provide by Witherslack.
The project can be written in any of the following in C# .NET MVC, .Net Blazor, or Angular.
# Concerns
Consuming data across different domains will cause a security issue known as CORS, the data will need to retrieved from the original source to take account of any changes.   There are 2 methods to overcome this problem;
•	Install an extension on the client
•	Add a middle layer API to relay the data
I decided to go with the method of adding an extra layer and expand on this to include a micro-services layout and access tokens.
# Project outline

The finished application will comprise of 4 applications detailed  below;

# GUI	
Built using Angular and Visual Code	Login

Logout

Load data and present chart

Load data and present in table


# api.auth.witherslackgroup	
Built using Visual Studio 2019	
Provide access token to client application 

# api.assess.witherslackgroup	
Built using Visual Studio 2019	
Secured using JWT token
Provide data sourced from the Witherslack group azure portal
http://witherslackgroup.azurewebsites.net/assess.json	Provide by Witherslack	

 

# Development list
•	Create Auth Web API

•	Create Assess Web API

•	Create a Model and Services application

•	Install JWT login token

•	Create login controller

•	Hard code user name and password

•	Create Assess controller to load data

•	Check auth token is correct

•	Return 401 error if not correct

# Angular
•	Create project

•	Install angular material

•	Create http service to login and get data

•	Create route guard and redirect to login

•	Create routes, child routes with separate views

•	Show data in a list on the page

•	Create chart

# Review and improve

There are a number of areas where the application could be improved upon a few, but not all, are;

•	I could add more error checking to ensure the file exists and the file has the correct format.

•	I could have added mock files to store the data

•	I could add a settings file to load the set URL provided Witherslack


# Summary
The application has been developed over the course of 2 days

I have paid particular attention to

•	Layout of the mechanics 

•	Adding complexity such as micro-services to deal with authentication

•	Responsive design

•	Having a working application available


I have really enjoyed developing the application and if I was starting a new project off this would be the way I would approach it.

