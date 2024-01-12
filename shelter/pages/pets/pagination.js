import { petData } from "./animals.js";

const popap = document.querySelector(".container_modal_window")
const openPopap = document.querySelectorAll(".img_items_pets");
const closePopap = document.querySelector(".header_nav_close");
const btnFirst=document.querySelector(".button_arrow_right_pets.left-one")
const btnPrev=document.querySelector(".button_arrow_right_pets.left-two")
const btnLast=document.querySelector(".button_arrow_right_pets.right-one")
const btnNext=document.querySelector(".button_arrow_right_pets.right-two")
const btnCurrent=document.querySelector(".button_arrow_right_number")
 
 let randomPetsArr = []; 
 function generatePets(count, limit) {
    for (let i = 0; i < limit; i++) {
      let arrRandomNums = [];
      while (arrRandomNums.length < count) {
        let r = Math.floor(Math.random() * count);
        if (arrRandomNums.indexOf(r) === -1) {
          arrRandomNums.push(r);
          randomPetsArr.push(petData[r]);       
        }
      }    
    }
let currentPage = 1;

function renderPets(page) {
    document.querySelector(".card_content_slider").innerHTML = "";
    for (let i = 0 + count * (page - 1); i < count * page; i++) {
      const newColumn = document.createElement("div");
      newColumn.classList.add("img_items_pets");
      newColumn.id=i
      newColumn.innerHTML = `      
            <img src="${randomPetsArr[i].img}" alt="${randomPetsArr[i].name}" />
            <h2 class="item_title_pets">${randomPetsArr[i].name}</h2>
            <button class="img_items_button_pets">Learn more</button>         
      `;
      document.querySelector(".card_content_slider").appendChild(newColumn);
    }
  
    btnCurrent.querySelector('h4').innerHTML = page;

    if (currentPage === limit) {
      btnNext.classList.add('disabled-btn');
      btnLast.classList.add('disabled-btn');
     
    } else if (btnNext.classList.contains('disabled-btn')) {
      btnNext.classList.remove('disabled-btn');
      btnLast.classList.remove('disabled-btn');
    }

    if (currentPage === 1) {
      btnFirst.classList.add('disabled-btn');
      btnPrev.classList.add('disabled-btn');

    } else if (btnPrev.classList.contains('disabled-btn')) {
      btnFirst.classList.remove('disabled-btn');
      btnPrev.classList.remove('disabled-btn');
    }
  }

  renderPets(1);
  btnNext.addEventListener("click", function (e) {
    e.preventDefault();
  
    if (currentPage >= limit) {
      renderPets(currentPage);
    } else {
      currentPage += 1;
      renderPets(currentPage);
    }
  });
  
  btnPrev.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage <= 1) return;
    currentPage -= 1;
    renderPets(currentPage);
  });
  
  btnFirst.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage === 1) return;
    currentPage = 1;
    renderPets(currentPage);
  });
  
  btnLast.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage === limit) return;
    currentPage = limit;
    renderPets(currentPage);
  });
 return randomPetsArr
 }
 
function setPagination() {
  if (window.innerWidth >= 1200) {
    generatePets(8, 6);
  } else if (window.innerWidth >= 768) {
    generatePets(6, 8);
  } else if (window.innerWidth >= 576) {
    generatePets(4, 12);
  } else {
    generatePets(3, 16);
  }
}

setPagination();
let timeId;
window.addEventListener("resize", () => {
  clearTimeout(timeId);
  timeId = setTimeout(setPagination, 250);
});

function showPopup(petData) {
  const modal = document.createElement("div");
  modal.classList.add("container_modal_window");
  const card_content_slider= document.querySelector(".card_content_slider")
  modal.innerHTML = `
    <div class="header_nav_close">
      <span class="header_close_line"></span>
      <span class="header_close_line"></span>
    </div>
    <div class="modal_window">
      <img src="${petData.img}">
      <div class="content_modal_window">
        <h3 class="content_name">${petData.name}</h3>
        <h4 class="content_type_breed">${petData.type} - ${petData.breed}</h4>
        <p class="content_description">${petData.description}</p>
        <ul class="content_items">
          <li class="content_item" id="age">Age: ${petData.age}</li>
          <li class="content_item" id="inoculations">Inoculations: ${petData.inoculations}</li>
          <li class="content_item" id="diseases">Diseases: ${petData.diseases}</li>
          <li class="content_item" id="parasites">Parasites: ${petData.parasites}</li>
        </ul>
      </div>
    </div>`;
    card_content_slider.prepend(modal);
  const headerClose = document.querySelector('.header_nav_close');
  headerClose.addEventListener('click', () => {
    modal.remove();
  });
}

document.querySelector(".card_content_slider").addEventListener('click', (event) => {
  const petIndex = event.target.closest('.img_items_pets').id;
  if (petIndex !== undefined) {
    showPopup(randomPetsArr[petIndex]);
  }
});