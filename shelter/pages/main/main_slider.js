
const sliderLeft=document.querySelector(".button_arrow_left")
const sliderRight=document.querySelector(".button_arrow_right")
let randomNum
let randomMiddle
let randomNumEnd
let show

document.getElementById("1_myimg").src=data[randomNum].img
document.getElementById("item_title_1").textContent=data[randomNum].name

document.getElementById("2_myimg").src=data[randomNum+1].img
document.getElementById("item_title_2").textContent=data[randomNum+1].name

document.getElementById("3_myimg").src=data[randomNum+2].img
document.getElementById("item_title_3").textContent=data[randomNum+2].name

function getRandomNum(min,max) { 
    min=0;
    max=6
    return Math.floor(Math.random() * (max - min) + min); 
  }
  function getRandomNumMiddle(min,max) { 
    min=3;
    max=6
    return Math.floor(Math.random() * (max - min) + min); 
  }
  function getRandomNumEnd(min,max) { 
    min=5;
    max=7
    return Math.floor(Math.random() * (max - min) + min); 
  }
   
   
async function showSliderRight(id) {
    const animals = 'animals.json';
    const res = await fetch(animals );
    const data = await res.json();
    
    randomNum=getRandomNum();
    randomMiddle=getRandomNumMiddle()
    randomNumEnd=getRandomNumEnd()
    
    document.getElementById("1_myimg").src=data[randomNum].img
    document.getElementById("item_title_1").textContent=data[randomNum].name
    const first=document.getElementsByClassName('first')[0]
    first.id=data[randomNum].id
    document.getElementById("2_myimg").src=data[randomNum+1].img
    document.getElementById("item_title_2").textContent=data[randomNum+1].name
    const second=document.getElementsByClassName('second')[0]
    second.id=data[randomNum+1].id
    document.getElementById("3_myimg").src=data[randomNum+2].img
    document.getElementById("item_title_3").textContent=data[randomNum+2].name
    const third=document.getElementsByClassName('third')[0]
    third.id=data[randomNum+2].id
    
}
sliderRight.addEventListener('click', showSliderRight);
sliderLeft.addEventListener('click', showSliderRight);


