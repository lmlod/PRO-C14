var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var obstaculo, obs1, obs2, obs3, obs4, obs5, obs6;

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  obs1 = loadImage("obstacle1.png");
  obs2 = loadImage("obstacle2.png");
  obs3 = loadImage("obstacle3.png");
  obs4 = loadImage("obstacle4.png");
  obs5 = loadImage("obstacle5.png");
  obs6 = loadImage("obstacle6.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.adicionarAnimação("colidiu",trex_colidiu)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background(180);
  
  
  
  if(keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();

  Cactos();
  
  drawSprites();
}

function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)

    cloud.y = Math.round(random(10,60))

    cloud.scale = 0.4;
    cloud.velocityX = -3;
    //distancia / velocidade
    cloud.lifetime = 200;

    //console.log(trex.depth)
    //console.log(cloud.depth)

    cloud.depth = trex.depth; //(atribuir para a nuvem a profundidade do trex)

    trex.depth = trex.depth + 1; // somar sempre +1 no trex para ficar na frente da nuvem
    
    
    }
}

function Cactos(){

  if (frameCount % 60 === 0){

    obstaculo = createSprite(600,165,10,40);
    obstaculo.velocityX = -6;

    var rand = Math.round(random(1,6));

    switch(rand){

      case 1: obstaculo.addImage(obs1);
              break;
      case 2: obstaculo.addImage(obs2);
              break;
      case 3: obstaculo.addImage(obs3);
              break;
      case 4: obstaculo.addImage(obs4);
              break;
      case 5: obstaculo.addImage(obs5);
              break;
      case 6: obstaculo.addImage(obs6);
              break;

      default: break;

    }

    obstaculo.scale = 0.5;
    obstaculo.lifetime = 600/6;


  }

}
