var Gamestate = 0;
var Playercount = 0;
var form, player, game;
var database
var allplayers


function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game ()
    game.getState()
    game.start()
}

function draw(){
 if(Playercount == 4){


game.update(1)
Gamestate = 1


 }
 
 
if(Gamestate == 1){

clear()
game.play()

}



}





