'use strict';

function onDotButtonClick(event: MouseEvent) {
    const activeDotButton: HTMLElement = document.querySelector('.protect-nature.first .carousel-dot.active') as HTMLElement; // возвращает одну кнопку с указанным классом
    const clickedDotButton: HTMLElement = event.target as HTMLElement;  // получить кнопку куда произошел клик
    activeDotButton.classList.remove('active'); // убирает класс active у кнопок на странице
    clickedDotButton.classList.add('active'); // добавить кликнутой кнопке класс active

    const activeSlide: HTMLElement = document.querySelector('.protect-nature.first .carousel-slide.active') as HTMLElement; // вернуть активный слайд
    activeSlide.classList.remove('active'); // удалить у него класс active

    const slideDots = document.querySelectorAll('.protect-nature.first .carousel-dot'); // получить коллекцию всех точек (ссылки на элементы соответствующие классу точек)
    const slides = document.querySelectorAll('.protect-nature.first .carousel-slide'); // получить коллекцию слайдов с таким классом

    for (let i = 0; i < slideDots.length; i++) {

        // ссылается ли нажатая кнопка на один и тот же элемент разметки
        if (clickedDotButton === slideDots[i]) {
            slides[i].classList.add('active'); // добавить active слайду совпадающему с точкой
        }
    }
}

let activeTestiArrowButton: HTMLElement = document.querySelector('.testimonials .carousel-arrow') as HTMLElement;
let feedbacksCounter: number = 0;

function onTestiArrowButtonClick(event: MouseEvent) {

    const clickedDotButton: HTMLElement = event.target as HTMLElement;
    const feedbacks = document.querySelectorAll('.testimonials .feedback');
    const carouselTestiElem: HTMLElement = document.querySelector('.testimonials .testimonial-content') as HTMLElement;

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
