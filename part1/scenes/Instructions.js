let Instructions = {
    setup: function (){
        // set stuff up
    },
    draw: function () {
        push();
        background(0);
        fill(255);
        text("Instructions", width / 2, height / 2);
        pop();
    },
    update: function () {

    },
    keyPressed: function(keyCode){
        console.log("Instructions detected keyPressed(): " + keyCode);
        GM.setCurrentScene("MainMenu");
    },
};