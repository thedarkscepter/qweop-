class Player{

constructor(){

this.index = null 
this.distance = 0
this.name = null 



}


getCount(){
var playerCountRef = database.ref('PC')
playerCountRef.on("value", function(data){
Playercount = data.val()
}) 
}

updatecount(count){
database.ref('/').update({PC:count}) 
}

Update(){



var playerIndex="players/Player"+Playercount
database.ref(playerIndex).set({Name:this.name,distance:this.distance})
}

static getplayerinfo(){

var playerinforef = database.ref('players')

playerinforef.on("value", (data) => {allplayers = data.val()}) 


}







}
