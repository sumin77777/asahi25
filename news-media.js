// $(document).ready(function () {
//     var swiper = new Swiper(".mySwiper", {
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//             type: "custom",
//             renderCustom: function (swiper, current, total) {
//                 let bullets = '';
//                 for (let i = 1; i <= total; i++) {
//                     bullets += `<span class="custom-bullet ${i === current ? 'active' : ''}" data-index="${i}">${i}</span>`;
//                 }
//                 return bullets;
//             },
//         },
//         on: {
//             slideChange: function () {
//                 this.pagination.render();
//                 this.pagination.update();
//             }
//         },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
       
//         loop: true,

//         breakpoints: {
//         0: {        // 모바일
//             slidesPerView: 1,
//             spaceBetween: 10,
//         },
//         430: {      // 태블릿
//             slidesPerView: 2,
//             spaceBetween: 10,
//         },
//         1200: {     // 노트북
//             slidesPerView: 2,
//             spaceBetween: 10,
//         },
//         1920: {     // PC/와이드
//             slidesPerView: 3,
//             spaceBetween: 10,
//         }
  
//     }
   
    
// });
//      $(document).on('click', '.custom-bullet', function () {
//         const index = $(this).data('index');
//         swiper.slideToLoop(index - 1); 
//     }); 
// })



document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".mySwiper", {
        // 슬라이드 설정
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,

        // 페이지네이션 (커스텀)
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "custom",
            renderCustom: function (swiper, current, total) {
                let bullets = '';
                for (let i = 1; i <= total; i++) {
                    // 현재 슬라이드에 'active' 클래스 추가
                    const activeClass = i === current ? 'active' : '';
                    bullets += `<span class="custom-bullet ${activeClass}" data-index="${i}">${i}</span>`;
                }
                return bullets;
            },
        },

        // 네비게이션 버튼
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // 반응형 분기점 설정
        breakpoints: {
            // 576px 이상일 때
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // 768px 이상일 때
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            // 1200px 이상일 때
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },

        // 이벤트 리스너
        on: {
            // 슬라이드 변경 시 페이지네이션 업데이트
            slideChange: function () {
                // 커스텀 페이지네이션을 다시 렌더링하고 업데이트합니다.
                if (this.pagination.el) {
                    this.pagination.render();
                    this.pagination.update();
                }
            }
        }
    });

    // 커스텀 페이지네이션 클릭 이벤트 처리
    // 이벤트 위임을 사용하여 '.swiper-pagination' 요소에 이벤트 리스너를 추가
    const paginationContainer = document.querySelector('.swiper-pagination');
    if (paginationContainer) {
        paginationContainer.addEventListener('click', function (event) {
            // 클릭된 요소가 '.custom-bullet'인지 확인
            if (event.target.classList.contains('custom-bullet')) {
                const index = parseInt(event.target.dataset.index, 10);
                // loop 모드이므로 slideToLoop 사용
                swiper.slideToLoop(index - 1);
            }
        });
    }
});