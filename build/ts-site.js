'use strict';
function onDotButtonClick(event) {
    var activeDotButton = document.querySelector('.protect-nature.first .carousel-dot.active'); // возвращает одну кнопку с указанным классом
    var clickedDotButton = event.target; // получить кнопку куда произошел клик
    activeDotButton.classList.remove('active'); // убирает класс active у кнопок на странице
    clickedDotButton.classList.add('active'); // добавить кликнутой кнопке класс active
    var activeSlide = document.querySelector('.protect-nature.first .carousel-slide.active'); // вернуть активный слайд
    activeSlide.classList.remove('active'); // удалить у него класс active
    var slideDots = document.querySelectorAll('.protect-nature.first .carousel-dot'); // получить коллекцию всех точек (ссылки на элементы соответствующие классу точек)
    var slides = document.querySelectorAll('.protect-nature.first .carousel-slide'); // получить коллекцию слайдов с таким классом
    for (var i = 0; i < slideDots.length; i++) {
        // ссылается ли нажатая кнопка на один и тот же элемент разметки
        if (clickedDotButton === slideDots[i]) {
            slides[i].classList.add('active'); // добавить active слайду совпадающему с точкой
        }
    }
}
var activeTestiArrowButton = document.querySelector('.testimonials .carousel-arrow');
var feedbacksCounter = 0;
function onTestiArrowButtonClick(event) {
    var clickedDotButton = event.target;
    var feedbacks = document.querySelectorAll('.testimonials .feedback');
    var carouselTestiElem = document.querySelector('.testimonials .testimonial-content');
    if ((clickedDotButton === document.querySelector('.a-next') || clickedDotButton === document.querySelector('.fa-chevron-right')) && feedbacksCounter < feedbacks.length - 2) {
        event.stopPropagation();
        ++feedbacksCounter;
        carouselTestiElem.style.transform = "translateX( " + (0 - feedbacksCounter * 50) + "% )";
    }
    if ((clickedDotButton === document.querySelector('.a-previous') || clickedDotButton === document.querySelector('.fa-chevron-left')) && feedbacksCounter >= 1) {
        event.stopPropagation();
        carouselTestiElem.style.transform = "translateX(calc( -" + feedbacksCounter * 50 + "% + " + 50 + "% ))";
        feedbacksCounter--;
    }
}
//# sourceMappingURL=ts-site.js.map
