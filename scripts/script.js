window.addEventListener('load', ()=>{

    const circleSlider = new Swiper('.circle-slider', {
        centeredSlides: true,
        loop: true,
        initialSlide: 1,
        navigation: {
            nextEl: '.circle-slider__next',
            prevEl: '.circle-slider__prev',
          },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            560: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        }
    })

    const feedbackSlider = new Swiper('.feedback__slider', {
        autoHeight: true,
        navigation: {
            nextEl: '.feedback-next',
            prevEl: '.feedback-prev',
          },
          breakpoints:{
            320:  {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768:  {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200:  {
                slidesPerView: 3,
                spaceBetween: 30,
            }
          }
    });

    const mobileBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const allLink= mobileMenu.querySelectorAll('a');

    if (allLink.length != null) {
        allLink.forEach(function(item){
            item.addEventListener('click',()=>{
                CloseMenu();
            })
        })
    }

    if (mobileBtn){
        mobileBtn.addEventListener('click', ()=>{
            OpenMenu();
        });
    };

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', ()=>{
            CloseMenu();
        })
    }


    function OpenMenu() {
        mobileBtn.classList.add('active');
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function CloseMenu() {
        mobileBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    

})