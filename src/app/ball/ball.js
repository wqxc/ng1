export function BallController() {
    'ngInject';
    'use strict';
    var rand=(min,max)=>parseInt(Math.random()*(max-min)+min);
    var myCanvas=document.querySelector("#myCanvas");
    var ctx=myCanvas.getContext("2d");
    const canvasWidth=myCanvas.width;
    const canvasHeight=myCanvas.height;
    class ball{
      constructor(ctx,canvasWidth,canvasHeight){
        this.ctx=ctx;
        // 颜色
        this.color=`rgb(${rand(1,256)},${rand(1,256)},${rand(1,256)}`;
        // 半径
        var r=rand(5,20);
        this.r=r;
        // 坐标
        this.x=rand(r,canvasWidth-r);
        this.y=rand(r,canvasHeight-r);
        this.maxWidth=canvasWidth-this.r;
        this.maxHeight=canvasHeight-this.r;
        // 速度
        var speedX=rand(2,6);
        this.speedX=rand(0,10)>5?speedX:-speedX;
        var speedY=rand(2,6);
        this.speedY=rand(0,10)>5?speedY:-speedY;

      }
      draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle=this.color;
        this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
        this.ctx.closePath();
        this.ctx.fill();
      }
      move(){
        this.x+=this.speedX;
        if(this.x>=this.maxWidth){
          this.speedX*=-1;
        }else if (this.x<this.r){
          this.speedX*=-1;
        }
        this.y+=this.speedY;
        if(this.y>=this.maxHeight){
          this.speedY*=-1;
        }else if (this.y<this.r) {
          this.speedY*=-1;
        }
      }
    }
    var balls=[];
    for (var i=0;i<500;i++){
      var ball1=new ball(ctx,canvasWidth,canvasHeight);
      balls.push(ball1)
    }
    setInterval(function() {
      ctx.clearRect(0,0,canvasWidth,canvasHeight);
      for(var i=0;i<balls.length;i++){
        balls[i].draw();
        balls[i].move()
      }
    },30);
}
