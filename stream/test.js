const MyWriteStream=require('./myWriteStream')

let ws=new MyWriteStream('./3.txt',{
  highWaterMark:3
});
// console.log(ws);

ws.on('error',function (err) {
  console.log(err);
})

ws.on('drain',function () {
  console.log('drain');
})
let flag=true;
let i=10;
if(flag){
  while(flag&&i>0){
    flag=ws.write('孤傲的山鹰'+i,'utf8',function (err) {
      console.log('callback');
    })
    i--
  }
}

// ws.write('孤傲的山鹰haojiujie','utf8',function (err) {
//   console.log('callback');
// })
ws.on('drain',function () {
  console.log('drain');
  // ws.write();
})

// let buf=Buffer.from('孤傲的山鹰');
// console.log(buf);
// console.log(buf.slice(0,3));
// console.log(buf);
