## css居中常用的几种方式
 ### 行内元素水平、垂直居中
   * 方案一：
   
  ```html
   <!--html代码如下：-->
    <div class="line-align-center-one">
        <span class="mark-item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores sint totam ullam. A asperiores assumenda commodi facere, non perspiciatis suscipit vero? Eaque enim explicabo maiores nihil nisi numquam, tempore.
       </span>
    </div>
   ```
   ```css
    /*css代码段*/
    .line-align-center-one{
      height: 400px;
      width: 100%;
      display: table-cell;
      vertical-align: middle;
      border: 1px solid #e4393c;
    }
    .mark-item{
      background: #ccc;
      color: #fff;
    }
```
这里主要是使用text-align:center;是元素水平居中

   * 方案二：
   

