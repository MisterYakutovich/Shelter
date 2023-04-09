

const sliderLeft=document.querySelector(".button_arrow_left")
const sliderRight=document.querySelector(".button_arrow_right")
let curenIndex=0
let curenIndex_1=1
let curenIndex_2=2
document.getElementById("1_myimg").src=data[curenIndex].img
document.getElementById("item_title_1").textContent=data[curenIndex].name

document.getElementById("2_myimg").src=data[curenIndex+1].img
document.getElementById("item_title_2").textContent=data[curenIndex_1].name

document.getElementById("3_myimg").src=data[curenIndex+2].img
document.getElementById("item_title_3").textContent=data[curenIndex_2].name

async function showSliderRight() {
    const animals = 'animals.json';
    const res = await fetch(animals );
    const data = await res.json();

    if (curenIndex>=0 || curenIndex<0 && curenIndex_1>=0 || curenIndex_1<0 && curenIndex_2>=0 || curenIndex_2<0){
 
    curenIndex +=3
    curenIndex_1 +=3
    curenIndex_2 +=3
    document.getElementById("1_myimg").src=data[curenIndex].img
    document.getElementById("item_title_1").textContent=data[curenIndex].name
    document.getElementById("2_myimg").src=data[curenIndex_1].img
    document.getElementById("item_title_2").textContent=data[curenIndex_1].name
    document.getElementById("3_myimg").src=data[curenIndex_2].img
    document.getElementById("item_title_3").textContent=data[curenIndex_2].name
    console.log(curenIndex)
    console.log(curenIndex_1)
    console.log(curenIndex_2)
    }
     if (curenIndex>=data.length-2 && curenIndex_1>=data.length-3  && curenIndex_2>=data.length-3){
        curenIndex =-3
        curenIndex_1=-2
        curenIndex_2=-1

        console.log(data[curenIndex_2].img)
        console.log(curenIndex)
        console.log(curenIndex_1)
        console.log(curenIndex_2)
    }
} 
sliderRight.addEventListener('click', showSliderRight);