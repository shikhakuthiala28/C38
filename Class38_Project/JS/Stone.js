class Stone extends BaseClass {
    constructor(x, y) {

      super(x,y,70,70);

      this.image=loadImage("images/stone.png");
    }

    display(){

      super.show();
    }
  }