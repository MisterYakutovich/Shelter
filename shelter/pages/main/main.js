(function () {
    const header = document.querySelector(".header")
    window.onscroll=()=>{
        if (window.pageYOffset>50){
            header.classList.add(".header.active")
        }
    }
}());

(function () { const header = document.querySelector(".header")
    const burgerItem=document.querySelector(".burger")
    const body=document.querySelector("body")
    const menu=document.querySelector(".navbar")
    const burger_active=document.querySelector(".burger_active")
    const menuLinks=document.querySelectorAll(".header_link,.header_link_about")
    burgerItem.addEventListener("click",()=>{
        menu.classList.toggle("navbar_active")
        burgerItem.classList.toggle("burger_active")
        body.classList.toggle('body_frozen');
        
    })
    window.addEventListener('click',e=>{
        const target=e.target
        if(!target.closest('.header_list') && !target.closest('.burger')){
            menu.classList.remove("navbar_active")
            burgerItem.classList.remove("burger_active")
            body.classList.remove('body_frozen');
        }
    })
   
    if (window.innerWidth <= 767){
        for (let i=0;i<menuLinks.length;i++){
            menuLinks[i].addEventListener("click",()=>{
                menu.classList.remove("navbar_active")
                burgerItem.classList.remove("burger_active")
            })
        }
    }
}());
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
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