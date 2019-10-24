let Highscores = {
    setup: function (){
        // set stuff up
    },
    draw: function () {
        push();
        background(0);
        fill(255);
        text("HIGHSCORES", width / 2, height / 2);
        pop();
    },
    update: function () {

    },
    keyPressed: function(keyCode){
        console.log("Highscores detected keyPressed(): " + keyCode);
        GM.setCurrentScene("MainMenu");
    },
};