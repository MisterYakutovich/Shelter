const popap=document.querySelector(".container_modal_window")
const openPopap=document.querySelectorAll(".img_items_pets" )
const closePopap=document.querySelector(".header_nav_close")

openPopap.forEach(el => {  
   el.addEventListener('click', function (e) {  
        e.target.classList.add('active')
        let target_1 = e.target.closest('.img_items_pets');
        showPopup(target_1)
    })           
})
async function showPopup(target_1) {
    popap.classList.add('active')
    const animals = 'animals.json';
    const res = await fetch(animals );
    const data = await res.json();
    console.log(data)
    let idItemsNumber = +target_1.getAttribute('id');
    document.querySelector(".content_name").textContent=data[idItemsNumber].name  
    document.querySelector(".content_type_breed").textContent = `${data[idItemsNumber].type} - ${data[idItemsNumber].breed}`;
    document.querySelector(".content_description").textContent = data[idItemsNumber].description;
    document.querySelector("#age").textContent = ` ${data[idItemsNumber].age}`;
    document.querySelector("#inoculations").textContent = ` ${data[idItemsNumber].inoculations}`;
    document.querySelector("#diseases").textContent = ` ${data[idItemsNumber].diseases}`;
    document.querySelector("#parasites").textContent = ` ${data[idItemsNumber].parasites}`;
    document.querySelector(".modal_window img").setAttribute('src', `${data[idItemsNumber].img}`);  
    }
closePopap.addEventListener('click', deletePopup);
function deletePopup() {
    popap.classList.remove('active') 
}
window.addEventListener('click',e=>{
    const target=e.target
    if(!target.closest('.modal_window') && !target.closest('.img_items_pets')){
        popap.classList.remove('active')
    }
})
