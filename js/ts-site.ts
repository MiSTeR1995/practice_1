'use strict';

function onDotButtonClick(event) {
    const activeDotButton = document.querySelector('.protect-nature.first .carousel-dot.active'); // возвращает одну кнопку с указанным классом
    const clickedDotButton = event.target;  // получить кнопку куда произошел клик
    activeDotButton.classList.remove('active'); // убирает класс active у кнопок на странице
    clickedDotButton.classList.add('active'); // добавить кликнутой кнопке класс active

    const activeSlide = document.querySelector('.protect-nature.first .carousel-slide.active'); // вернуть активный слайд
    activeSlide.classList.remove('active'); // удалить у него класс active

    const slideDots = document.querySelectorAll('.protect-nature.first .carousel-dot'); // получить коллекцию всех точек (ссылки на элементы соответствующие классу точек)
    const slides = document.querySelectorAll('.protect-nature.first .carousel-slide'); // получить коллекцию слайдов с таким классом

    for (let i = 0; i < slideDots.length; i++) {

        // ссылается ли нажатая кнопка на один и тот же элемент разметки
        if (clickedDotButton === slideDots[i]) {
            slides[i].classList.add('active'); // добавтить active слайду совпадающему с точкой
        }
    }
}

let (<any>activeTestiArrowButton) = document.querySelector('.testimonials .carousel-arrow');
let (<any>feedbacksCounter) = 0;

function onTestiArrowButtonClick(event) {

    const clickedDotButton = event.target;
    // activeTestiArrowButton.classList.remove('active');
    // clickedDotButton.classList.add('active');
    // activeTestiArrowButton = clickedDotButton;

    const feedbacks = document.querySelectorAll('.testimonials .feedback');
    const carouselTestiElem = document.querySelector('.testimonials .testimonial-content');

    if ((clickedDotButton === document.querySelector('.a-next') || clickedDotButton === document.querySelector('.fa-chevron-right')) && feedbacksCounter < feedbacks.length - 2) {
        event.stopPropagation();
        ++feedbacksCounter;
        carouselTestiElem.style.transform = `translateX( ${0 - feedbacksCounter * 50}% )`;
    }
    if ((clickedDotButton === document.querySelector('.a-previous') || clickedDotButton === document.querySelector('.fa-chevron-left')) && feedbacksCounter >= 1) {
        event.stopPropagation();
        carouselTestiElem.style.transform = `translateX(calc( -${feedbacksCounter * 50}% + ${50}% ))`;
        feedbacksCounter--;
    }
}
