class Rope{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            bodyb:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.slingshot);
    }

   

    display(){
        if(this.slingshot.bodyA ){
        var pointA = this.slingshot.body1.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}