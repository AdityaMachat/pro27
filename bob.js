class Bob{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
             restitution:0.4,
             density:0.09,
             friction:0.5,
        }
        this.body= Bodies.circle(x,y,radius/2,options);
        this.radius=radius;
        World.add(world,this.body);
        }
        
        display(){
         var posx=this.body.position.x
         var posy=this.body.position.y
         push();
         translate(posx,posy);
         ellipseMode(CENTER);
         ellipse(0,0,this.radius,this.radius);
         pop();

        }
}