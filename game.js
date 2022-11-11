
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


let posicaoX = Math.floor(Math.random() * screenWidth)
let posicaoY = Math.floor(Math.random() * screenHeight)

console.log(posicaoX,posicaoY)