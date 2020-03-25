class Game{


constructor(){}

 getState(){
var gameStateRef = database.ref('GS')
gameStateRef.on("value", function(data){Gamestate = data.val()})
 }


update(state){
database.ref('/').update({GS:state})
}


async start(){ 


if(Gamestate == 0){

player = new Player()
var playercountref = await database.ref('PC').once("value")
if(playercountref.exists()){
    Playercount = playercountref.val()
player.getCount()}
form = new Form()
form.display()


}



}

play(){

form.hide()
textSize(30)
text("GAME START PS:IK ITS CHEAP", 120, 100)
Player.getplayerinfo()

if(allplayers !== undefined){

var display_position = 130
for( var plr in allplayers){

if(plr === "Player"+player.index){

    fill("red")

}  
else{

fill("black")


}
display_position+=20
textSize(15)
text(allplayers[plr].name + ":" + allplayers[plr].distance,120,display_position)


}

}

if(keyIsDown(UP_ARROW) && player.index !== null){


player.distance+=5
player.Update()









}




}









}