class Paper{
    constructor(x, y, r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.bodies = Bodies.circle(this.x, this.y, this.r/2, options);

    }
    display(){
        var paperposition = this.body.position;
        push();
        transalate(paperposition.x, paperposition.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255, 0, 255);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}