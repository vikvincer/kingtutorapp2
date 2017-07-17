var express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


const port =  process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'/public')));

app.get('*',(req,res)=> {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(port,function() {
    console.log('Server started on port '+port);
});

