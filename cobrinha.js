var canvas = document.getElementById("canvas")
var snake = new Snake();
var apple = new Apple();
var canvasContext = canvas.getContext('2d');

window.onload = ()=>{
    gameLoop();
}

function gameLoop(){
    setInterval(show, 1000/20)
}

function show(){
    update();
    draw();
}

function update() {

}

function draw(){
    createRect(0, 0, canvas.width, canvas.height, "black")
    createRect(0, 0, canvas.width, canvas.height)

    for var
}

class Snake{
    constructor(x, y, size){
        this.x = x
        this.y = y
        this.size = size
        this.tail = [{s:this.x, y:this.y}]
        this.rotateX = 0
        this.rotateY = 1
    }

    move(){
        var newRect;
        if(this.rotateX == 1){
            newRect = {
                x: this.tail[this.tail.length -1].x + this.size,
                y: this.tail[this.tail.length -1].y
            }
        } else if(this.rotateX == - 1){
            newRect = {
                x: this.tail[this.tail.length -1].x + this.size,
                y: this.tail[this.tail.length -1].y
            }
        } else if(this.rotateY == 1){
            newRect = {
                x: this.tail[this.tail.length -1].x,
                y: this.tail[this.tail.length -1].y + this.size
            }
        } else if(this.rotateY == -1){
            newRect = {
                x: this.tail[this.tail.length -1].x,
                y: this.tail[this.tail.length -1].y + this.size
            }
        }

        this.tail.shift()
        this.tail.push(newRect)
    }
}

class Apple{
    constructor(){
        var isTouching;
        while(true){
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size
            for (let i = 0; i < snake.tail.length.length; i++) {
                if (this.x == snake.tail[i].x && this.y == snake.tail[i].y){
                    isTouching = true;
                }
            }
            if (!isTouching) {
                break;
            }
            this.color = "red"
            this.size = snake.size
        }
    }
}