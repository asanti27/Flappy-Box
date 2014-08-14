

var game= new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');





var mainState={
  

  preload: function () {
  
  
  
  
  
  game.stage.backgroundColor="#71c5cf";
  
  game.load.image('bird', 'assets/bird.png');
  
   game.load.image('pipe', 'assets/pipe.png');
},
create:function(){

game.physics.startSystem(Phaser.Physics.ARCADE);

this.bird = this.game.add.sprite(100,245, 'bird');

game.physics.arcade.enable(this.bird);

this.bird.body.gravity.y=1000;





  
},
update:function(){
 } 
};
game.state.add('main',mainState);
game.state.start ('main');
