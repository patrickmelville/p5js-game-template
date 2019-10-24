let MainMenu = {
    cursor: null,
    selection: 0,
    options: [],
    setup: function (){
        this.cursor = createVector(width/2-110, height/2-12);
        // this.options = [keys from GM scenes]
    },
    draw: function () {
        push();
        background(0);
        fill(255);
        textAlign(CENTER);
        textSize(55);
        text("GAME TITLE", width / 2, height / 3);

        // menu choices
        textAlign(LEFT);
        textSize(33);
        text("START", width / 2 - 50, height / 2);
        textSize(33);
        text("Highscores", width / 2 - 50, height / 2 + 50);
        textSize(33);
        text("Instructions", width / 2 - 50, height / 2 + 100);
        pop();

        // selection icon
        push();
        rectMode(CENTER);
        fill("red");
        translate(this.cursor.x, this.cursor.y);
        rotate(radians(45));
        square(0, 0, 50);
        rotate(radians(-45));
        fill("black");
        square(-25, 0, 75);
        pop();

    },
    update: function () {

    },
    keyPressed: function (keyCode) {
        console.log("MainMenu detected keyPressed(): " + keyCode);
        // 32 is SPACEBAR
        // 13 is ENTER
        // 38 is UPARROW
        // 40 is DOWNARROW

            if(keyCode == 40){
                this.selection++;
            }
            if(keyCode == 38){
                this.selection--;
            }

        
        // GM.setCurrentScene(this.options[selection]);
    },
};