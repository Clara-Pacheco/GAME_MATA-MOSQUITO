const startGame = document.querySelector('#startGame')
startGame.addEventListener('click', function(){
 let valueSelect = document.querySelector('#selectLevel').value
 if(valueSelect === ''){
  alert('Selecione um nível para iniciar o jogo')
  return false
 }else{
  alert(valueSelect)
 }

  window.location.href="game.html?" + valueSelect

})


