const express = require ('express');
const path = require ('path');
const PORT = process.env.PORT || 4002; 

const app = express(); 

app.use(express.static(__direname))
app.use(express.static(path.join(__dirname,'build')));

app.get('/ping', (req, res) => {
    return res.send('pong')
});


app.get("/*", (req,res)=>{
    res.sendFile(path.join(__dirname), 'build', index.html)
});

app.listen (PORT, ()=>{
    console.log("http://localhost:"+PORT);
});