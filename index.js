// entry point & dependencies
const express = require("express")

// middleware 
const app = express();

// routes 
app.get("/", (req, res) => {
    res.send("API's Loading .... Please still working on it")
    res.write
});

// setup port 
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});