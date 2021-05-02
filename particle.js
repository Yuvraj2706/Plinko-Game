class Particle{
    constructor(x,y,r){
     var opt={
         isStatic:false,
         restitution:0.3
     }
     this.r = r;
     this.body = Bodies.circle(x,y,r);
     
     World.add(world,this.body);



    }
   display(){
     var pos = this.body.position;
     var angle = this.body.angle;
       
     push();
     translate(pos.x,pos.y);
     rotate(angle);
    
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);
      
     pop(); 



   }
   

}