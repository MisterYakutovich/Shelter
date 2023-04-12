

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
   
  //function showHide(id) {
   // var obj_basics = document.getElementById('slider_default');
   // var obj_standard = document.getElementById('slider_next_right');
   // if(id=='slider_next_right'){   
     //   document.getElementById("slider_default").style.display='none';
    //    document.getElementById("slider_next_right").style.display='grid'; 
    //    document.getElementById("3_myimg").src=data[randomMiddle].img
    //    document.getElementById("item_title_3").textContent=data[randomMiddle].name
     //   document.getElementById("4_myimg").src=data[randomMiddle].img
     //   document.getElementById("item_title_4").textContent=data[randomMiddle].name
     //   document.getElementById("5_myimg").src=data[randomMiddle].img
    //    document.getElementById("item_title_5").textContent=data[randomMiddle].name
   // }
   // if(id=="slider_default"){
      //  document.getElementById("slider_default").style.display='grid';
       // document.getElementById("slider_next_right").style.display='none';  
   // }
//}
   
async function showSliderRight(id) {
    const animals = 'animals.json';
    const res = await fetch(animals );
    const data = await res.json();
   
    randomNum=getRandomNum();
    randomMiddle=getRandomNumMiddle()
    randomNumEnd=getRandomNumEnd()
   
 
    document.getElementById("1_myimg").src=data[randomNum].img
    document.getElementById("item_title_1").textContent=data[randomNum].name
    document.getElementById("2_myimg").src=data[randomNum+1].img
    document.getElementById("item_title_2").textContent=data[randomNum+1].name
    document.getElementById("3_myimg").src=data[randomNum+2].img
    document.getElementById("item_title_3").textContent=data[randomNum+2].name
   //  showHide()
}
sliderRight.addEventListener('click', showSliderRight);
sliderLeft.addEventListener('click', showSliderRight);

