const express = require('express');
const app = express();
const port = 8000;

app.get('/userDetail', (request, response) => {

    return response.json({
        "firstName": "abhishek", 
        "dob": "26 June 1996"
    });
})

app.listen(port, (error) => {

    if(error) {
        console.log('Internal Server Error!!!', error);
        return;
    }

    console.log('Server is running on port: ', port);
})