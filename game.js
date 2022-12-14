
let screenHeight = 0
let screenWidth = 0
let vidas_perdidas = 1
let tempo = 10
criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?','')
if(nivel === 'normal'){
  criaMosquitoTempo = 1500
}else if( nivel === 'dificil'){
  criaMosquitoTempo = 1000
}else{
  criaMosquitoTempo = 750
}


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

document.querySelector('#cronometro').innerHTML = tempo

let cronometro = setInterval(function(){

  tempo -= 1

  if(tempo < 0){
    clearInterval(cronometro)
    clearInterval(createMosquitoOneSecond)  
    window.location.href='vitoria.html'
  }else{
    document.querySelector('#cronometro').innerHTML = tempo
  }
 
},1000)

function createElement(){


    if(document.querySelector('#mosquito')){
      document.querySelector('#mosquito').remove()

      if(vidas_perdidas <= 3){
        document.querySelector('#v'+ vidas_perdidas).src = "images/coracao_vazio.png"
        vidas_perdidas++
      }else{
        window.location.href="fim_de_jogo.html"
      }
      
    }

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
    mosquito.id = 'mosquito'
    document.body.appendChild(mosquito)

    const elementoMosquito = document.querySelector('#mosquito')
    elementoMosquito.addEventListener('click',function(){
      this.remove()
    })
    

}

let createMosquitoOneSecond = setInterval(function(){
  createElement()
},criaMosquitoTempo)


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