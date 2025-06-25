$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "custom",
            renderCustom: function (swiper, current, total) {
                let bullets = '';
                for (let i = 1; i <= total; i++) {
                    bullets += `<span class="custom-bullet ${i === current ? 'active' : ''}" data-index="${i}">${i}</span>`;
                }
                return bullets;
            },
        },
        on: {
            slideChange: function () {
                this.pagination.render();
                this.pagination.update();
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
       
        loop: true,

        breakpoints: {
            430: {      
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1200: {     
                slidesPerView: 2,
                spaceBetween: 10,
              },
            1920: {     
              slidesPerView: 3,
              spaceBetween: 10,
            }
          }
        });
  

    $(document).on('click', '.custom-bullet', function () {
        const index = $(this).data('index');
        swiper.slideToLoop(index - 1); 
    });
    
});
        

