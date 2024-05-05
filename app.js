require('@babel/register');
const express = require('express');

const app = express();

const PORT = 3000;

const indexRouter = require('./routes/index.router');
const serverConfig = require('./configs/serverConfig');

serverConfig(app);

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
