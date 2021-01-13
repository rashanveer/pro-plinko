class Particle {
    constructor(x,y,r){
        var options = {
             isStatic:true,
            restitution :0.3,
            friction : 0.5,
            density:1.2
        }
    
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.colour =  colour(random(0,255),random(0,255),random(0,255))
        
        World . add (world,this.body);
    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle
        push ();
        translate (pos.x,pos.y)
      rotate (angle)
        imageMode(CENTER)
        fill(this.colour)
        
        ellipse(0,0,this.r, this.r);
      pop ();
    }
}