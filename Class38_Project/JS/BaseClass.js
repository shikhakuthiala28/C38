class BaseClass{

    constructor(x,y,width,height){

        var options={

            friction:1.5,
            density:1,
            restitution:0.8
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.w=width;
        this.h=height;
        this.image=loadImage("images/base.png");
        World.add(world,this.body);
    }

    show(){

        var pos=this.body.position;
        var angle= this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop ();
    }

}