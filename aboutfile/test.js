/**
 * Created by ranchengwei on 2018/2/24 0024.
 * 主要打包现有蜜蜂项目，将蜜蜂项目里面开发源码的文字替换成别的语言文字
 */
const fs = require('fs');
const path = require('path');
// const removeAllFiles = require('./deleteFile');//删除目标文件夹，目前没有使用
const languageConfig = require('./language');//替换文字配置文件
//打包相关配置项
const buildDir='test';//项目打包后的存放文件地址
const targetDir='standard';//需要被打包的项目文件夹目录


//打包方法
function readDir(dirPath) {
  fs.readdir(dirPath, function (err, data) {
    if (err) {
      throw Error(err)
      return;
    }
    data.forEach((item, index) => {
      let filePath = path.join(dirPath, item);
      let stats = fs.statSync(filePath);
      //是文件夹
      if (stats.isDirectory()) {
        let dirPath = path.join(buildDir, filePath);
        mkdirFunction(dirPath);
        readDir(filePath)
      };
      //是文件
      if (stats.isFile()) {
        let newFilePath = path.join(buildDir, filePath);
        let reg = /\.(js|html)?$/;
        if (reg.test(filePath)) {
          readFileFunction(filePath, newFilePath);
        } else {
          readAndWriteFile(filePath, newFilePath);
        }
      };
    })
  })
}
//创建文件夹
function mkdirFunction(mkPath) {
  let pathArr=mkPath.split(path.sep);
  let parentPath=path.join(pathArr[0],pathArr[1]);
  try {
    fs.accessSync(parentPath,fs.constants.R_OK | fs.constants.W_OK)
  }catch (err){
    fs.mkdirSync(parentPath);
  }
  fs.access(mkPath, fs.constants.R_OK | fs.constants.W_OK, function (err) {
    //文件夹不存在
    if (err && err.code == "ENOENT") {
      fs.mkdirSync(mkPath);
    }
  })
}
//读文本文件
function readFileFunction(filePath, newFilePath) {
  fs.readFile(filePath, {encoding: 'utf8'}, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    let newDate = replaceText(data);
    writeNewFile(newFilePath, newDate);
  })
}
//写文本文件
function writeNewFile(fileName, data) {
  fs.writeFile(fileName, data, {encoding: 'utf8'}, function (err) {
    if (err) {
      console.log(err);
    }
  })
}
//替换配置项当中的所有文本
function replaceAll(str, s1, s2) {
  var reg=new RegExp(s1,'ig');
  return str.replace(reg, s2);
}
//内容替换
function replaceText(data) {
  for (var key in languageConfig) {
    data = replaceAll(data, key, languageConfig[key])
  }
  return data;
}

//读写图片以及其它文件
function readAndWriteFile(filePath, newFilePath) {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    fs.writeFile(newFilePath, data, function (err) {
      if (err) {
        console.log(err);
      }
    })
  })
}

//执行打包方法
readDir(targetDir);