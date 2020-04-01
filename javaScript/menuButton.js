// making menu items disappear
let menu_elem =[];
let check = 0;
console.log("menu button is loaded")
menu_elem = document.getElementsByClassName("elem");

for(let i =0; i<menu_elem.length; i++){
    menu_elem[i].style.display = "none";
}


// making menu items appear and disappear when you click on the menu button
const btn = document.body.querySelector('button');

function menu_open(){
   
    for(let i =0; i<menu_elem.length; i++){
        menu_elem[i].style.display ="block";
        check = 1;
    }      
}

function  menu_close(){

    for(let i =0; i<menu_elem.length; i++){
        menu_elem[i].style.display ="none";
        check = 0;
    } 
}

btn.addEventListener('click', function(isDisplayed){
  
  if(check == 0){
      menu_open();
  }else if(check ==1){
      menu_close();
      
  }  
});








