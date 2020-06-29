function Enemy(x,y){
    //const width = window.innerWidth;
    //const height = window.innerHeight;
    this.x = x;
    this.y =y;
    this.xdir=2;
    this.yshift = 20;
    this.radius =20;
    this.remove = false;

    this.show = function(){
        fill(255,0,0);

        ellipse(this.x, this.y, this.radius*2, this.radius*2);

    }

    this.change_dir = function(){

        this.xdir *= -1;
        this.y += this.yshift;
    }


    this.move = function(){

        this.x = this.x + this.xdir;
        
    }

    this.get_destroyed = function(){

        this.remove = true;
    }
    
}