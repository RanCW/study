## css居中常用的几种方式
 ### 行内元素水平、垂直居中
   * 方案一(不设置居中元素宽高)，代码如下：
   使用display: table;display:table-cell；vertical-align:middle;属性
  ```html
   <!--html代码如下：-->
    <div class="panel-body line-align-center-one-content">
      <div class="line-align-center-one">
         <span class="mark-item">
            这里是测试的内容 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae earum nobis unde vel. Ab accusantium distinctio ex ipsa necessitatibus. Dolorum facere impedit laudantium magni minima molestiae, nam quidem soluta veniam.
         </span>
      </div>
    </div>
   ```
   ```css
    /*css代码段*/
    .line-align-center-one-content{
      display: table;
      width: 100%;
    }
    .line-align-center-one{
      height: 400px;
      display: table-cell;
      vertical-align: middle;
      border: 1px solid #e4393c;
      text-align: center;
    }
    .mark-item{
      background: #ccc;
      color: #fff;
    }
```
这里主要是使用text-align:center;是元素水平居中

   * 方案二：使用绝对定位+位移(不设置居中元素宽高)，代码如下：
   ```html
   <!--html代码段如下-->
    <div class="line-align-center-two">
       <span class="mark-two">
          这里是一个行内元素 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam exercitationem pariatur recusandae voluptate. Amet, animi architecto commodi cumque distinctio, dolorum eaque laborum modi molestiae mollitia nesciunt perferendis rem tenetur voluptate!
       </span>
    </div>
```
  ```css
    /*css代码段如下*/
    .line-align-center-two{
      position: relative;
      height: 400px;
      border: 1px solid #e4393c;
    }
    .mark-two{
      background: #ccc;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) ;
    }
```

  * 方案三（不设置居中元素宽高）：使用相对定位+位移+text-align: center;代码如下：
  
   ```html
    <-- html代码段如下-->
    <div class="line-align-center-three">
       <span class="mark-three">
          这里是一个行内元素
       </span>
    </div>
   ```
  ```css
    /*css代码段如下*/
    .line-align-center-three{
      height: 400px;
      border: 1px solid #e4393c;
      text-align: center;
    }
    .mark-three{
      position: relative;
      top: 50%;
      transform: translateY(-50%) ;
      background: #ccc;
      color: #fff;
    }
  ```
  
  * 方案四（不设置居中元素宽高）：使用flex布局，代码如下：
  
  ```html
    <!--html代码-->
    <div class="line-align-center-four">
      <span class="mark-four">
        这里是一个行内元素 lorem
      </span>
    </div>
  ```
  ```css
    .line-align-center-four{
      display:flex;/*Flex布局*/
      display: -webkit-flex; /* Safari */
      align-items:center;/*指定垂直居中*/
      height: 400px;
      border: 1px solid #e4393c;
      justify-content: center;/*指定水平居中*/
    }
    .mark-four{
      background: #ccc;
      color: #fff;
    }
  ```
  
  * 方案五（不设置居中元素宽高）：使用伪类，代码如下：
    
    ```html
      <!--html代码如下-->
      <div class="line-align-center-five">
        <span class="mark-five">
            这里是一个行内元素 Lorem
        </span>
      </div>
    ```
    ```css
      /*css代码如下*/
      .line-align-center-five {
        height: 400px;
        border: 1px solid #e4393c;
        text-align: center;/*水平居中*/
        font-size: 0;/*这一个很重要*/
      }
      .line-align-center-five:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        height: 100%;
      }
      .mark-five {
        font-size: 14px;
        display: inline-block;
        vertical-align: middle;
        background: #ccc;
        color: #fff;
        line-height: 26px;
      }
    ```
  
   ### 块级元素，水平、垂直居中
   块级元素的居中同样可以使用上述的行内元素的居中方案。
   
   ### 通用方案
   * 在已知容器和居中元素的宽高的情况下，可以使用margin来调节元素居中；
   ```html
   <!--html如下-->
   <div class="common-item">
     <div class="common-one">
       这里是内容区域，宽高100
     </div>
   </div>
   
   ```
   ```css
    /*css代码如下：*/
    .common-item{
      height: 400px;
      border: 1px solid #e4393c;
    }
    .common-one{
      width: 100px;
      height: 100px;
      border:1px solid blue;
      margin: 150px auto 0;
    
    }

   ```
   * 在已知居中元素的宽高尺寸的情况下，可以使用绝对定位或相对定位+margin负值来实现
   ```html
    <div class="common-item-two">
      <div class="common-two">
        这里是内容区域，宽高100
      </div>
    </div>
   ```
   ```css
     .common-item-two{
       height: 400px;
       border: 1px solid #e4393c;
       position: relative;
     }
     .common-two{
       width: 100px;
       height: 100px;
       border:1px solid blue;
       position: absolute;
       top: 50%;
       left: 50%;
       margin-top: -50px;
       margin-left: -50px;
     }
   ```
   或
   
   ```html
      <div class="common-item-two">
        <div class="common-two">
          这里是内容区域，宽高100
        </div>
      </div>
   ```
   ```css
     .common-item-two{
       height: 400px;
       border: 1px solid #e4393c;
     }
     .common-two{
       width: 100px;
       height: 100px;
       border:1px solid blue;
       position: relative;
       top: 50%;
       left: 50%;
       margin-top: -50px;
       margin-left: -50px;
     }
   ```