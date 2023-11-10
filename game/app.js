const gameArea = document.querySelector('.game');
const btn = document.createElement('button');
const output = document.createElement('div')
const answer = document.createElement('input')
output.textContent = "Click the button to start the Game"
btn.textContent = "Start Game"


btn.textContent = "Start Game"
gameArea.append(output)
gameArea.append(btn)
const opts = ['*','/','+','-'];
const game = {maxValue:10, questions:10, oVals:[0,2,3],curQue:0};

btn.addEventListener('click', startGame);

for(let i = 0; i <100; i++){
  let vals = Math.floor(Math.random()*(game.maxValue+1))

  console.log(vals)

}

function startGame(){
    // btn.style.display = 'none'
    game.curQue = 0;
    buildQuestion()
  }

function buildQuestion(){
  if(game.curQue < game.questions){
      game.curQue++;
      output.innerHTML='';
    
      let vals = [];
      vals[0] = Math.floor(Math.random() *(game.maxValue+1))
      vals[1] = Math.floor(Math.random()*(game.maxValue+1))
      game.oVals.sort(() =>{return 0.5 -Math.random()})
      vals[3] = opts[game.oVals[0]]
      console.log(game.oVals)
      vals[2] = eval(vals[0] + opts[3] + vals[1])
      let hiddenVal = Math.floor(Math.random()*3)
      console.log(hiddenVal)
      vals[hiddenVal = '__']
      output.innerHTML = ` ${vals[0]} ${opts[3]} ${vals[1]} = ${vals[2]}`
  }
}