# Node,Express and MongoDB MVC Application

 An MVC application structure template using Node, Express, Mongoose and EJS.

## Quick start

 1. Get the code:

        git clone https://github.com/wende61/Test.git
        cd Test

 2. Install dependencies

        npm install
        bower install

 3. Start the server

        npm start

 4. The app should be running on `http://localhost:4111/`

 ## Demo

 please use the below url to test the MVC demo
 https://nameless-bayou-11407.herokuapp.com/

 Register and login by your registerd email and password

 and also you can test API by using post man
 
 ## API
 1. GET -- get list of users
        https://nameless-bayou-11407.herokuapp.com/api/users/
 2. POST --to add new user
        https://nameless-bayou-11407.herokuapp.com/api/users/
        body 
            {
                "name": "wende",
                "email": "wende@gmail.com"
            }
 3. PUT -- to update use by id
        http://localhost:3000/api/users/id
        body 
            {
                "name":"wende",
                "email":"wende@gmail.com"
            }
 4. DELETE -- remove user by id
        http://localhost:3000/api/users/id