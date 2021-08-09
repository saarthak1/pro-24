class Stone{
    constructor(x,y)
    {
        var options={
            restitution:1
        }
        this.x=x;
		this.y=y;
        this.w=	60;
        this.h=	60;
        this.body=Bodies.rectangle(this.x, this.y, 60,60, options);
		World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;		
			push()
			
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("grey");
			rect(pos.x,pos.y,this.w,this.h );
		pop()
    }
}