/**
 * Created by ranchengwei on 2018/2/24 0024.
 */
let fs = require('fs');
let path = require('path');
//dir-文件夹目录
//callback-回调函数
function removeAllFiles(target) {
  let files = fs.readdirSync(target);
  files.forEach(function(item){
    let child = target+'/'+item;
    if(fs.statSync(child).isDirectory()){
      removeAllFiles(child);
    }else{
      fs.unlinkSync(child);
    }
  });
  fs.rmdirSync(target);
}

module.exports=removeAllFiles;