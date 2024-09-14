// Testing out REST API creation using resources online
const express = require('express');

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 3000;

//Shows the port the server is connecting with
app.listen(PORT, () =>{
    console.lot("Server listening on PORT: ", port)
});

//Defines an endpoint
app.get("/status", request, response)