require('@babel/register'); 
const express = require('express'); 
const app = express(); 
const PORT = 3000; 
config(app); 

app.listen(PORT, ()=> {
  console.log('its working');
})