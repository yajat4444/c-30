class Box {
  constructor(x, y, width, height) {
    var options = {
     
        'restitution':0.8,
        'friction' : 1.0,
        'density':0.3
    }
    this.visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    
    if(this.body.speed <4){
      var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    rect(0,0, this.width, this.height);
    pop();
    }
     else{
      World.remove(world, this.body);
      push();
          this.Visiblity = this.Visiblity - 10;
          fill(this.Visiblity);
          pop();
      }
    }
    
  
};