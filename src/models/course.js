const { Schema, model } = require('mongoose');

const schema = new Schema({
  _id: {
    type: String,
    // 自动将传过来的数据转换成全大写
    uppercase: true
  },
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    default: 'This is a description'
  }
});

// 在mongoose创建了一个虚拟字段code，当它获取值的时候相当于获取的是_id的值
schema.virtual('code').get(function() {
  // this指向实际获取的document，所以没有转化成arrow function
  return this._id;
})

// Model 两个参数： model（'model叫什么名字'，schema是什么）
// 名字首字母大写，在数据库里会被转换成全小写的collection Course -> courses
// 将Course这个model注册在了mongoose里面，之后可以在外面文件引用已经导出的model，还可以在mongoose里面通过Course这个名字找到这个model
module.exports = model('Course', schema);