let trick = 0;
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

       
    }

    fly(){
        this.sling.bodyA = null;
    }

    attacher(bodyA)
    {
        this.sling.bodyA=bodyA;
    }

    dotrick(){
        if(this.sling.bodyA){
            trick = 0;
        }else{
            trick = 1;
        }
      }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;push()
            stroke(255);
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);pop();
           
        
        }

       
        
    }
    
}