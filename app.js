require('@babel/register');
const express = require('express');
const config = require('./config/config');
const homeRouter = require('./routes/homeRouts');

const app = express();
const PORT = 3000;
config(app);
app.use('/task', homeRouter);

app.listen(PORT, () => {
  console.log('its working');
});
