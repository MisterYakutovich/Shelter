(function () {
    const header = document.querySelector(".pets_header")
    window.onscroll=()=>{
        if (window.pageYOffset>50){
            header.classList.add(".pets_header.active")
        }
    }
}());

(function () { const header = document.querySelector(".pets_header")
    const burgerItem=document.querySelector(".burger")
    const menu=document.querySelector(".navbar_pets")
    const burger_active=document.querySelector(".burger_active")
    const menuLinks=document.querySelectorAll(".header_link,.header_link_our_pets")
    burgerItem.addEventListener("click",()=>{
        menu.classList.toggle("navbar_pets_active")
        burgerItem.classList.toggle("burger_active")
        
    })
   
   // burgerItem.addEventListener("click",()=>{
     //   menu.classList.remove("navbar_active")
  //  })
    if (window.innerWidth <= 767){
        for (let i=0;i<menuLinks.length;i++){
            menuLinks[i].addEventListener("click",()=>{
                menu.classList.remove("navbar_pets_active")
                burgerItem.classList.remove("burger_active")
            })
        }
    }
}());
//scroll
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.pets_header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());