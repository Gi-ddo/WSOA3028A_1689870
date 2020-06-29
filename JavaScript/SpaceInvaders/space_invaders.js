// using this to make the game fullscreen
const screen_width = window.innerWidth;
const screen_height = window.innerHeight;

//Standard variables
let player;
let enemies=[];
let size = 12;
let bullets=[];


function setup(){
   createCanvas(screen_width*0.99, screen_height*0.99);
  player = new Player();
  for(let  i=0; i<size; i++){
        enemies[i] = new Enemy(i*100+300, 120);   
  }

  
}

function draw(){

    //setting background colour for canvas
    background(51);

    player.show();
      
  // Makes the enemies appear and checks for collisions
   let does_hit_edge= false;

    for(let  i=0; i<size; i++){

       
            enemies[i].show();
            enemies[i].move();
        
            

        if(enemies[i].x> (screen_width*0.98) ||  enemies[i].x <= 10){
            does_hit_edge = true;
        }
    }

    if(does_hit_edge){

        for(let  i=0; i<size; i++){

            enemies[i].change_dir();
        }
    }

    for(let  i=0; i<bullets.length; i++){

        bullets[i].show();
        bullets[i].move();
    }

    
    for(let  i=0; i<bullets.length; i++){
        
        for(let j=0; j< enemies.length;j++){
            
            if(bullets[i].collision(enemies[j])){
                bullets[i].get_destroyed();
                enemies[j].get_destroyed();
            }
    
        }
    }


    

    for(let i= enemies.length-1;i>=0; i--){
        if(enemies[i].remove){
            enemies.splice(i,1);
        }

    }

    for(let i= bullets.length-1;i>=0; i--){
            if(bullets[i].remove){

                bullets.splice(i,1);
            }

    }

  
}

// Input system
document.addEventListener("keydown", (event) => {
	if (event.keyCode === "D".charCodeAt(0) || event.keyCode === 39) {
		player.move(1); 
	} else if (event.keyCode === "A".charCodeAt(0) || event.keyCode === 37) {
		player.move(-1);
	} else if(event,keyCode === 32){
        let bullet = new Bullet(player.x, screen_height-53);
        bullets.push(bullet);
    }
});

