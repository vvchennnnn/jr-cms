const mongoose = require('mongoose');
const connectionString = process.env.CONNECTION_STRING;

exports.connectToDB = () => {
  // database 连接状态监听
  const db = mongoose.connection;

  // success
  db.on('connected', () => {
    console.log(`DB connected with ${connectionString}`);
  });

  // error
  db.on('error', (error) => {
    console.log('DB connection failed');
    console.log(error.message);
    // server是存活在进程process里面的，当process被关闭了，server也就相应被关闭了
    // process有不同的关闭方式 人为正常关闭 => process.exit(0); 人为非正常关闭 => process.exit(非零); 
    process.exit(1);
  });

  // disconnect
  db.on('disconnected', () => {
    console.log('disconnected');
  });
  
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}