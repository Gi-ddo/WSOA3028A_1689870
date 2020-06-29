// using this to make the game fullscreen
const screen_width = window.innerWidth;
const screen_height = window.innerHeight;

//Standard variables
let player;
let enemies=[];
let size = 12;
let bullets=[];
let enemy_count = 36;
let live =1;
let total_i =0;
let cols =3;
let back_button = document.getElementsByClassName("back-button");
function setup(){
   createCanvas(screen_width*0.99, screen_height*0.99);
  player = new Player();

  for(let  i=0; i<size; i++){
        
        for(let j=0;j<cols;j++){

            enemies[total_i] = new Enemy((i+1) * screen_width/(size+1), (j+1) * screen_height/12); 
            total_i++;  
        }
               
  }
}

function draw(){

    //setting background colour for canvas
    background(51);

    player.show();
    player.move();
  // Makes the enemies appear and checks for collisions
   let does_hit_edge= false;

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
        enemy_count--;

        if(enemy_count<=0){
            gameover();
        }
    }

 }

 for(let i= bullets.length-1;i>=0; i--){
        if(bullets[i].remove){

            bullets.splice(i,1);
        }

 }

    enemies.forEach(enemy =>{

            enemy.show();
            enemy.move();

            if(enemy.x > (screen_width*0.98) ||  enemy.x <= 10){
                does_hit_edge = true;
            }
    })
       
    if(does_hit_edge){
        enemies.forEach(enemy=>{
                enemy.change_dir();      
        })   
    }

    bullets.forEach(bullet =>{
        bullet.show();
        bullet.move();
    })
}

function keyReleased(){

    if(key!= ' '){
        player.set_dir(0);
    }

}

 function keyPressed(){

    if(keyCode === 39 || keyCode === 68){
        player.set_dir(1);
    }

    if(keyCode === 37 || keyCode === 65){
        player.set_dir(-1);
    }

    if(keyCode === 32){
        let bullet = new Bullet(player.x, screen_height-53);
         bullets.push(bullet);
    }

 }

function gameover(){
    if(enemy_count<=0){
        alert("Game Over You Win!, Click back to exit reload page to restart");
    }       
}


