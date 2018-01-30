// 按行读取
const fs=require('fs')

let rs=fs.createReadStream('3.txt',{
  highWaterMark:3
})

rs.on('readable',function () {
  console.log('readable')
})
rs.on('data',function (data) {
  console.log(data.toString());
})
rs.on('end',function () {
  console.log('end');
})