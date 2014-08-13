//Initialize Phaser Engine. Create a 400x400px game!//

var game= new Phaser. Game(400,400,Phser,AUTO,'gameDiv')





var mainState={
  

  preload: function () {
  
  
  
  
  
  game.stage.backgroundColor="#71c5cf";
},
create:function(){
  
},
update:function(){
 } 
};
game.state.add('main',mainState);
game.state.start ('main');
