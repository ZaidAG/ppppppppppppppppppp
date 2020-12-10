class Paper{
    constructer(x,y,width,height){
      var options={
          isStatic:false,
          resititution:0,
          friction:0.5,
          density:1.2
      }
    this.body=Matter.Bodies.circle(x,y,this.radius,[options],[4])
    this.radius=radius;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    pop();
  }
};