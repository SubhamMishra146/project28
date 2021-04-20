class launcher{
	constructor(body,point)
	{
		
		var options={ bodyA:body,			 
			pointB:point, 
			stiffness:0.02, 
			 length:5
			
		}
		
		this.bodyA=body
		this.pointB=point
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
	fly()
	{
		
		this.launcher.bodyA=null;
	}

}