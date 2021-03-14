class Banana extends BaseClass {
    constructor(x, y) {
  
      super(x,y,70,70);
      this.image=loadImage("images/banana.png");
      Matter.Body.setStatic(this.body,true);
      
    }
    display(){
      
      super.show();
    }
  };
  