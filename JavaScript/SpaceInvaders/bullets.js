function Bullet(x,y){
    
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.remove = false;


    this.show= function(){

        fill(0,255,0);
        ellipse(this.x, this.y, (this.radius*2), (this.radius*2));
    }

    this.move = function(){

        this.y = this.y -5;
    }

    this.collision = function(enemy){
        
        let distance = dist(this.x, this.y, enemy.x, enemy.y);
        if(distance < this.radius+ enemy.radius){
            return true;
        }else{
            return false;
        }
    }

    this.get_destroyed = function(){
        this.remove = true;
    }

}