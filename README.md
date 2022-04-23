# mean-stack-code-setup
This project is about basic setup of angular with nodejs (mean stack)  <br><br><br>

**To make the project clear I have create seperate branch for backend (feature/backend-setup) and frontend (feature/angular/setup), please check both**

**Package Installation** <br><br>
**BackEnd**
1. npm i <br>
2. npm init <br>
3. npm i express <br> <br>
Command to run back end code: node index.js <br>
But with above command we need to refresh our browser page every time for backend. So simple solution is to install nodemon to avoid refreshing of page everytime and make work easy

Command to install nodemon
1. npm i nodemon <br>

And then we need to write **nodemon index.js** to run backend code <br>

To test API we can also use POSTMAN and hit the api to check the response from the backend.

**How to run Angular Code**
**Command: ng serve --proxy-config proxy.conf.json** <br><br>
**We need use proxy to hit the backend API as our angular application and server is running on different port** <br>
proxy.conf.json is a new file created inside project which contains proxy code. <br><Br>

FEEL FREE TO TAKE PULL!!!, THANKS :)
