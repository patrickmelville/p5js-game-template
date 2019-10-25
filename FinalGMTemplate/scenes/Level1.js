let Level1 = {
    setup: function (){
        // set stuff up
    },
    draw: function () {
        push();
        background("red");
        text("LEVEL 1", width / 2, height / 2);
        pop();
    },
    update: function () {

    },
    keyPressed: function(keyCode){
        console.log("Level 1 detected keyPressed(): " + keyCode);
        
        GM.recentScore = 11234;
        Highscores.addHighscore(GM.recentScore);
        GM.setCurrentScene("Highscores");
    },
};
