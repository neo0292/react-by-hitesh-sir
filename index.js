const express = require('express')

const app = express();
const port = 3000;

app.get('/',(req, res)=>{
  res.send("Welcome to the Express server");
});

app.get('/login',(req, res)=>{
  res.send('<h2>Welcome to login page</h2>');
});

app.listen(port,()=>{
  console.log(`Server listening at ${port}`);
});