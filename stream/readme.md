## stream学习笔记

### 事件
  1. 公共事件
     *  newListener事件，来自events模块，当给一个对象添加监听事件的时候会触发的事件：
        - 使用方法：
            ```javascript
                xxx.on('newListener',function(event,listener){//event—事件名称，listener—事件的回调函数

                })

            ```
  2. 可读流的事件
     * readable 事件，