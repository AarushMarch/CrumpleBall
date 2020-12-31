class ground{
    constructor(x, y, height){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
        }
        this.x = x;
        this.y = y;
        this.height = height;
        this.bodies = Bodies.rectangle(this.x, this.y, options);

    }
    display(){
        var groundPosition = this.body.position;
        push();
        transalate(groundPosition.x, groundPosition.y);
        rectMode(CENTER);
        strokeWeight(3);
        ellipse(0, 0, 800, this.height);
    }
}