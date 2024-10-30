let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
  }
function palavraAleatoria(){
 let palavras = ["negro", "tata", "gostoso", "lindo"];
  return random(palavras); 
}

 function inicializaCores(){
 background("white");
  fill("black")
  textSize(64);
  textAlign(CENTER, CENTER);  
 }

function PalavraParcial(minimo, maximo){
  let quantidade= map(mouseX,minimo, maximo, 1, palavra.length);
   let parcial = palavra.substring(0,quantidade);
  return parcial;
}

 function draw() {
  inicializaCores();
   let texto = PalavraParcial(0, width);
   text(texto, 200, 200,);
  
  
   
  
   
  
  /*if(mouseX < 50){
   let palavra = "n"
   text(palavra, 200, 200);
  } else if(mouseX < 100){
    let palavra = "ne";
    text(palavra, 200, 200);
  }  else if(mouseX < 150){
    let palavra = "neg";
    text(palavra, 200, 200);
  }
    else if(mouseX < 200){
    let palavra = "negr";
    text(palavra, 200, 200);
     } else if(mouseX < 250){
    let palavra = "negro";
    text(palavra, 200, 200);
   }*/
}