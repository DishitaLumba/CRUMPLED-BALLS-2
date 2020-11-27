class Paper {

     constructor(x,y,radius) {
         var Options = {
             'restitution':0.3,
             'isStatic':false,
             'friction':0.5,
             'density':1.2
         }
     this.body = Bodies.circle(x,y,radius,Options);
     this.radius = radius;
     this.paper =loadImage("paper.png");

     World.add(world, this.body);
     }

     display(){
     var angle =this.body.angle;

     push();
     translate(this.body.position.x,this.body.position.y);
     rotate(angle);
     fill(255,0,255);
     imageMode(CENTER);
     image(this.paper,0,0,this.radius,this.radius);
     pop();

        
     }

    
}