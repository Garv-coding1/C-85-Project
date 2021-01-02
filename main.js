canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_x = 10;
car1_y = 10;
car1_width = 100;
car1_height = 50;
car1_image = "car1.png";

car2_x = 10;
car2_y = 70;
car2_width = 100;
car2_height = 50;
car2_image = "car2.png";

background_image = "racing.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = backgroundUpload;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = car1Upload;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = car2Upload;
    car2_imgTag.src = car2_image;
}

function backgroundUpload() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function car1Upload() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function car2Upload() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPress = e.keyCode;
    console.log(keyPress);

    if (keyPress == '38') {
       car1_up();
        console.log("up arrow key");
    }

    if (keyPress == '40') {
       car1_down();
        console.log("down arrow key");
    }

    if (keyPress == '37') {
       car1_left();
        console.log("left arrow key");
    }

    if (keyPress == '39') {
       car1_right();
        console.log("right arrow key");
    }

    if (keyPress == '87') {
       car2_up();
        console.log("key w");
    }

    if (keyPress == '83') {
       car2_down();
        console.log("key s");
    }

    if (keyPress == '65') {
       car2_left();
        console.log("key a");
    }

    if (keyPress == '68') {
       car2_right();
        console.log("key d");
    }
    if (car1_x >= 700) {
        console.log("Car 1 won");
        document.getElementById("status").innerHTML = " Car 1 won";
    }
    else if (car2_x >= 700) {
        console.log("Car 2 won");
        document.getElementById("status").innerHTML = " Car 2 won";
    } 
    
}

function car1_up() {
    if (car1_y > 0) {
        car1_y =car1_y - 10;
        console.log("When up arrow key pressed, x = " + car1_x + ", y = " + car1_y);
        backgroundUpload();
        car1Upload();
        car2Upload();
    }
}

function car1_down() {
    if (car1_y <= 540) {
        car1_y =car1_y + 10;
        console.log("When down arrow key pressed, x = " + car1_x + ", y = " + car1_y);
        backgroundUpload();
        car1Upload();
        car2Upload();
    }
}

function car1_left() {
    if (car1_x > 0) {
        car1_x =car1_x - 10;
        console.log("When left arrow key pressed, x = " + car1_x + ", y = " + car1_y);
        backgroundUpload();
        car1Upload();
        car2Upload();
    }
}

function car1_right() {
    if (car1_x <= 690) {
        car1_x =car1_x + 10;
        console.log("When right arrow key pressed, x = " + car1_x + ", y = " + car1_y);
        backgroundUpload();
        car1Upload();
        car2Upload();
    }
  
}

function car2_up() {
    if (car2_y > 0) {
        car2_y =car2_y - 10;
        console.log("When up arrow key pressed, x = " + car2_x + ", y = " + car2_y);
        backgroundUpload();
        car1Upload();
        car2Upload();
    }
}

function car2_down() {
    if (car2_y <= 540) {
        car2_y =car2_y + 10;
        console.log("When down arrow key pressed, x = " + car2_x + ", y = " + car2_y);
        backgroundUpload();
        car1Upload();
        car2Upload();
    }
}

function car2_left() {
    if (car2_x > 0) {
        car2_x =car2_x - 10;
        console.log("When left arrow key pressed, x = " + car2_x + ", y = " + car2_y);
        backgroundUpload();
        car1Upload();
        car2Upload();
    }
}

function car2_right() {
    if (car2_x <= 690) {
        car2_x = car2_x + 10;
        console.log("When right arrow key pressed, x = " + car2_x + ", y = " + car2_y);
        backgroundUpload();
        car1Upload();
        car2Upload();
    }
    
}