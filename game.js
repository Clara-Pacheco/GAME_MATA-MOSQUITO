
let screenHeight = 0
let screenWidth = 0

function ajustaTamanhoPalcoJogo(){
  screenHeight = window.innerHeight
  screenWidth = window.innerWidth
  console.log(screenWidth,screenHeight)
  
}

ajustaTamanhoPalcoJogo()

window.addEventListener('resize', function(){
  screenHeight = window.innerHeight
  screenWidth = window.innerWidth
  console.log(screenWidth, screenHeight)
})


let posicaoX = Math.floor(Math.random() * screenWidth) - 90
let posicaoY = Math.floor(Math.random() * screenHeight) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX,posicaoY)

// Create html element dynamically

const mosquito = document.createElement('img')
mosquito.src = "images/mosca.png"
mosquito.className = tamanhoMosquitoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
document.body.appendChild(mosquito)

function tamanhoMosquitoAleatorio(){
  let classe = Math.floor(Math.random()*3)
  switch(classe){
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2: 
      return 'mosquito3'
  }
}

 function ladoAleatorio(){
  let lado = Math.floor(Math.random() * 2)
  switch(lado){
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
  }
 }