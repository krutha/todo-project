const express = require('express');
const cors =require('cors')
const app = express();
const path = require('path');
app.use(cors());
app.use(express.static("public"));
app.get('/', function(req, res) {
    res.sendFile( path.join(__dirname, 'public/index.html') );
})
app.get('/styles', function(req, res) {
    res.sendFile( path.join(__dirname, 'public/styles.css') );
})
app.get('/js', function(req, res) {
    res.sendFile( path.join(__dirname, 'public/server.js') )
})
const port= process.env.PORT||4000

app.listen(port,function(){
    console.log(`server is running on ${port}`)
})