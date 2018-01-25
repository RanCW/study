## events 模块学习笔记
   事件的原理是发布订阅模式
### 事件相关API
   * 绑定事件（订阅）
     * on、once等方法都可以绑定事件。
     * on绑定的事件可以多次触发，once绑定的事件只能触发一次
   * 触发事件 （发布）

        emit(event,arguments)

   * 删除事件
       removeListener(event,callback)——移除指定的一个事件
       removeAllListener(event,callback)——移除所有的事件