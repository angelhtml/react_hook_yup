const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post("/api/user", async (req, res) => {
    const username = req.body.Username;
    const age = req.body.Age;
    res.send({"name" : username, "age" : age})  
    console.log("data receive")
});

app.listen(port, function(){
    console.log(`express server is running on port ${port}`);
}) 