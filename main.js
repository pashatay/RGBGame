let numSqrs = 9;
let colors = randomColor(numSqrs);

let pickedColor = colors[Math.floor(Math.random() * numSqrs)];
let colorDisplay = document.querySelector('#colorDisplay')
let squares = document.querySelectorAll('.square');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');

colorDisplay.textContent = pickedColor;

hardBtn.addEventListener('click', function(){
   easyBtn.classList.remove("selected")
   hardBtn.classList.add("selected");
   numSqrs = 9;
   colors = randomColor(numSqrs);
   pickedColor = colors[Math.floor(Math.random() * numSqrs)];
   colorDisplay.textContent = pickedColor;
   for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
   }
})

easyBtn.addEventListener('click', function(){ 
   hardBtn.classList.remove("selected");
   easyBtn.classList.add("selected");
   numSqrs = 6;
   colors = randomColor(numSqrs);
   pickedColor = colors[Math.floor(Math.random() * numSqrs)];
   colorDisplay.textContent = pickedColor;
   for(let i=0; i<squares.length; i++){
       if(colors[i]){
           squares[i].style.backgroundColor = colors[i];
       }else{
           squares[i].style.display = 'none';
       }
   }
})

for(let i =0; i< squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', function(){
      let clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play again';
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
      }else{
          this.style.backgroundColor = '#232323';
          messageDisplay.textContent = 'Try again';
      }
  })
}

function changeColors(color){
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function randomColor(num){
    let arr=[];
    for(let i=0; i<num; i++){
      let str ='';
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      str += `rgb(${r}, ${g}, ${b})`;
      arr.push(str);
    }
    return arr;
} 

resetButton.addEventListener('click', function(){
    location.reload();
})