class Paper{
    constructor(x, y, diameter) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
      this.body = Matter.Bodies.circle(200,200,140,options);
      World.add(world, this.body);
      }

      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        console.log("hello");
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //ellipseMode(CENTER);
        fill(100);
        ellipse(200,200,70,70);
        pop();
      }

         
}