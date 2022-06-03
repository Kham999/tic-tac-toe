const area = document.querySelector('.area');
const boxes = document.getElementsByClassName('box');
const container = document.querySelector('.result-container');
const button = document.querySelector('.button');
const text = document.querySelector('.text');
const arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let num= 0;
let res = '';
const audio = document.querySelector('.audio');
let playerTwo = document.querySelector('.player-two');
let playerOne = document.querySelector('.player-one');
let scor = document.querySelector('.score');
let nums = document.querySelector('.text-num');



area.addEventListener('click', getBox);
button.addEventListener('click',closeBtn);

function getBox(e){
    if(e.target.className == 'box' && e.target.textContent == ''){
       num % 2 === 0 ? e.target.innerHTML= 'X' : e.target.innerHTML= '0';
   num++;
   nums.innerHTML = 'Number of moves: '+num;
   checkBox() 
   }
   }

function checkBox(){
    for(i = 0;i < arr.length; i++){
        if(boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X')
        {
            text.innerHTML = `Player One Wins!`;
            container.style.display = 'block';
            audio.play();
            showContainer();
        }
          else if(boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0')
            {
                text.innerHTML = `Player Two Wins!`;
                container.style.display = 'block';
                audio.play();
                showContainer();
    }
    else if(num === 9){
    container.style.display = 'block';
    audio.play();
    showContainer();
}
}
}

function closeBtn(){
    container.style.display = 'none';
    location.reload();
}

function showContainer() {
    container.classList.add('result-show');
  }

