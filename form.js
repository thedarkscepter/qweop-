class Form{

constructor(){


     this.input = createInput("Name")
     this.button = createButton("pls play")
      this.greeting = createElement('h3');




}
hide(){


this.input.hide()
this.button.hide()
this.greeting.hide()



}
display(){


var title = createElement('h2')
title.html("Cheaper asphalt8")
title.position(130,0)
this.input.position(130,160)
this.button.position(250,200)
this.button.mousePressed(() => {this.input.hide(); this.button.hide(); player.name = this.input.value(); Playercount+=1; player.index = Playercount; player.Update(); player.updatecount(Playercount); this.greeting.html("welome and pls dont delete "+ player.name); this.greeting.position(130,160)})
}






}