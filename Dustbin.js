class Dustbin {
    constructor (x, y, width, height){
        var options = { 
            isStatic: true,
            'restitution':0,
            'friction':1,
            'density':0.1

        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("dustbin.png")

    }

    display(){
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x, this.body.position.y, this.width, this. height);
        imageMode(CENTER);
        image(this.image,610,595,150,150);
        
    }
}