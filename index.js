// entry point & dependencies
const express = require("express")

// middleware 
const app = express();

// routes 
app.get("/", (res, req) => {
    res.send("API's Loading ....")
});

// setup port 
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});