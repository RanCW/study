/**
 * Created by ranchengwei on 2018/2/23 0023.
 */

const language={
  "文本":"打包后的文本",
};



//对象按照键值排序
function sortObj(obj) {
  let arr=Object.keys(obj);
  arr.sort();//排序一次
  arr.sort(function (a, b) {//根据obj的键值长短再次排序
    return b.length-a.length;
  });
  let newArr={};
  arr.forEach((item,index)=>{
    newArr[item]=obj[item];
  });
  return newArr;
}
module.exports=sortObj(language);