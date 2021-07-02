require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const {connectToDB} = require('./utils/db');

const PORT = process.env.PORT || 8080;
const app = express();
const morganLog = process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');
app.use(morganLog); 
app.use(cors());

app.use(express.json());
app.use('/api', router);

connectToDB();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});