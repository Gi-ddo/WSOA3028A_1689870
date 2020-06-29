const size_width = window.innerWidth;
const size_height = window.innerHeight;

function Player(){
      this.x = size_width/2;
      this.size = 40;
      this.xdir =0;
     
    this.show = function(){
       
        fill(0,0,255);
        rectMode(CENTER);
        rect(this.x ,height-20,40,40);
    }

    this.set_dir = function(mov){

      this.xdir =mov;
    }
    this.move = function (direction) {
		this.x += this.xdir*8;
    }
    
    

}