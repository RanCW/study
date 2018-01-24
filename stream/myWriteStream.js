const fs=require('fs');
const EvetentEmiter=require('events');

class MyWriteStream extends EvetentEmiter{
  constructor(path,options={}){
    super(path,options);
    this.flags=options.flags||'w';
    this.encoding=options.encoding||'utf8';
    this.fd=options.fd||null;
    this.mode=options.mode||0o666;
    this.autoClose=options.autoClose||true;
    this.start=options.start||0;//开始写入的标识位位置
    this.path=path;//要写的文件路径
    this.highWaterMark=options.highWaterMark||16*1024;//能写入的最大数据量默认16kb
    this.length=0;//当前
    this.writing=false;//是否正在写入
    this.pos=this.start;//每次写入的标识位
    this.buffer=[];//缓存区
    this.open();//开启文件
  }
  //开启方法
  open(){
    fs.open(this.path, this.flags, this.mode, (er, fd) =>{
      if (er) {
        if (this.autoClose) {
          this.destroy();
        }
        this.emit('error', er);
        return;
      }
      this.fd = fd;
      this.emit('open');
      console.log(fd);
    });
  }
  write(chunk,encoding,callback){
    chunk=Buffer.isBuffer(chunk)?chunk:Buffer.from(chunk);
    this.length+=chunk.length;
    let writeChunk=chunk.slice(0,this.highWaterMark);
    let ret = this.length < this.highWaterMark;

    if(this.writing){
      this.buffer.push({
        chunk,
        encoding,
        callback
      })
    }else{
      this.writing=true;
      this._write(chunk,encoding,()=> {
        this.clearBuffer()
        if(this.length==0){
          callback();
        }
      });
    }
    return ret;
  }
  _write(chunk,encoding,callback){
    let len=chunk.length;
    if (typeof this.fd !== 'number') {
      return this.once('open', ()=>{
        this._write(chunk, encoding, callback);
      });
    }

    fs.write(this.fd,chunk,0,len,this.pos,(err,bytes)=>{
      if (err) {
        if (this.autoClose) {
          this.destroy();
          this.emit('error',err);
        }
        // return callback(err);//差异
      }
      this.pos += bytes;
      this.length -= bytes;
      callback();
    })
  }
  clearBuffer() {
    //取出缓存区中的第一个buffer
    //8 7
    let data = this.buffer.shift();
    if(data){
      this._write(data.chunk,data.encoding,()=>this.clearBuffer())
    }else{
      this.writing = false;
      //缓存区清空了
      this.emit('drain');
    }
  }
  destroy(){
    console.log('destroy');
    fs.close(this.fd, () => {
      this.emit('close');
    })
  }
}


module.exports=MyWriteStream;