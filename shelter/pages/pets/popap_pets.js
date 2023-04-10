const popap=document.querySelector(".container_modal_window")
const openPopap=document.querySelectorAll(".img_items_pets" )
const closePopap=document.querySelector(".header_nav_close")

openPopap.forEach(el => {  
   el.addEventListener('click', function (e) {  
        e.target.classList.add('active')
        showPopup()
    })           
})
async function showPopup() {
    popap.classList.add('active')
    const animals = 'animals.json';
    const res = await fetch(animals );
    const data = await res.json();
     document.querySelector(".content_name").textContent=data[0].name                
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
