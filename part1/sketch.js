function setup() {
  createCanvas(800, 800);

  // testing GM data
  console.log(GM.title);
  console.log(GM.scenes);

  // testing GM Methods
  GM.addScene("MainMenu", MainMenu);
  GM.addScene("Level1", Level1);
  // GM.addScene("Level2", Level2);
  GM.addScene("Highscores", Highscores);
  GM.addScene("Instructions", Instructions);
  GM.logAllScenes();

  GM.setCurrentScene("MainMenu");
  // GM.setCurrentScene("Level1");
  // GM.setCurrentScene("Highscores");
  // GM.setCurrentScene("Instructions");

}

function draw() {

  GM.getCurrentScene().draw();
  // MainMenu.draw();
}

function keyPressed(){
  GM.getCurrentScene().keyPressed(keyCode);
}