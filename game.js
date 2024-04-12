const canvas = document.GetElemntById("game-canvas");
let PlatformGap = 0;
let score = 0;
let highscore = 0;
 
class Doodler{
constructor(){
this.context = canvas.getcontext("2d")
this.x = canvas.width / 2;
this.y = canvas.height - 200;
this.image = new Image ();
this.image.src = "colocar endereço"
this.prevY = this.y;
this.width = 50;
this.height = 50;
this.vx = 0;
this.vy = 0;
this.gravity = 0.03;
this.jumpStrength = -2.5;
 }
//função que muda a posição do doodler
updatePosition(){
this.prevY = this.y;
this.x += this.vx;
this.y += this.vy;
if(this.vy > 3.5){
this.vy = 3.5;
}else{
this.vy += this.gravity;
}
this.checkForWrapDoodler();
// função que checa se
// o doodler está fora do canvas horizontalmente
// f.e doodler deixa o canvas para a esquerda
// ele vai entrar novamente pela direita
// e vice-versa
checkForWrapDoodler()
}
checkCollisionWithPlatforms() {
}
jump(){
}
moveright(){
this.vx+=4;
this.image.src = "botar imagem"
}
moveleft(){
this.vx -= 4;
this.image.src = "botar imagem"
}
draw(){
this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
}
}
class platform{
// construtor para a classe platform
// x horizontal
// y vertical
constructor (x, y){
this.context = canvas.getContext("2d");
this.image = newImage();
this.image.src = "foto do background";
this.x = x;
this.y = y;
this.width = 100;
this.height = 20;
}
}