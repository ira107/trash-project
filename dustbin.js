class Dustbin{
    constructor(x,y)
	{
   
    this.x=x
    this.y=y
    this.DustbinWidth=200;
    this.DustbinHeight= 220;
    this.wallThickness=20;
    this.angle=0;
   
this.bottomBody=Bodies.rectangle(this.x, this.y, this.DustbinWidth,this.wallThickness,{isStatic:true} );
 this.leftWallBody=Bodies.rectangle(this.x-this.DustbinWidth/2,this.y-this.DustbinHeight/2,this.wallThickness,this.DustbinHeight,{isStatic:true} );
 
Matter.Body.setAngle(this.leftWallBody,this.angle);

 this.rightWallBody=Bodies.rectangle(this.x+this.DustbinWidth/2,this.y-this.DustbinHeight/2,this.wallThickness,this.DustbinHeight,{isStatic:true} ); 
 
Matter.Body.setAngle(this.rightWallBody,-1*this.angle);
 World.add(world, this.bottomBody);
 World.add(world, this.leftWallBody);
 World.add(world, this.rightWallBody);

 this.dustbinIMG = loadImage("images/dustbingreen.png");
}

display(){
    var posBottom = this.bottomBody.position;
    
     push();
     translate(posBottom.x, posBottom.y);
            rectMode(CENTER);
          stroke(255)  
          angleMode(RADIANS);		
          fill(255)
          rect(0,0,this.DustbinWidth,this.wallThickness);
          imageMode(CENTER)		
            image(this.dustbinIMG,0,0,this.DustbinWidth,this.DustbinHeight);
        
          pop()         
			
}


}