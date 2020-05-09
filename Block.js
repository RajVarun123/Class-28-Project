class Block {
    constructor(x,y) {
        var options = {
            'restitution':0.5,
            'friction':0.8,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, 40, 20, options);
        this.width = 40;
        this.height = 20;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        stroke("brown");
        rect(0, 0, this.width, this.height);
        pop();
      }
}