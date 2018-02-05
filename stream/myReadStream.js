const fs=require('fs')
const EventEmiter=require('events')

class myReadStream extends EventEmiter{
  constructor(path,options){
    super();
    this.path=path;
    this.highWaterMark=opeions.highWaterMark||64*1024;//最高水位线
    this.fd=null;//文件开启指针标识符
    this.flags=options.flags||null;
    this.mode=options.mode||0o666;
    this.start=options.start||0;
    this.end=options.end;
    this.autoClose=options.autoClose||true;
    this.pos=undefined;
    this.bytesRead=0;
    this.length=0;
    this.buffer=Buffer.alloc(this.highWaterMark);
  }
  open(){
    fs.open(this.path,this.flags,this.mode,(err,fd)=>{
      if (err) {
        if (this.autoClose) {
          this.destroy();
        }
        this.emit('error', err);
        return;
      }

      this.fd = fd;
      this.emit('open', fd);
      this.read();
    })
  }
  read(){
    let readSize=Math.min(this.highWaterMark,);
    fs.read(this.fd,this.buffer,this.start,readSize,this.pos,(err,bytesRead)=>{

    })
  }
  destroy(){
    fs.close(this.fd)

  }
}