function onDotButtonClick(event) {
    const activeDotButton = document.querySelector('.carousel-dot.active'); // возвращает одну кнопку с указанным классом
    const clickedDotButton = event.target;  // получить кнопку куда произошел клик
    activeDotButton.classList.remove('active'); // убирает класс active у кнопок на странице
    clickedDotButton.classList.add('active'); // добавить кликнутой кнопке класс active

    const activeSlide = document.querySelector('.carousel-slide.active'); // вернуть активный слайд
    activeSlide.classList.remove('active'); // удалить у него класс active

    const slideDots = document.querySelectorAll('.carousel-dot'); // получить коллекцию всех точек (ссылки на элементы соответствующие классу точек)
    const slides = document.querySelectorAll('.carousel-slide'); // получить коллекцию слайдов с таким классом

    for (let i = 0; i < slideDots.length; i++) {

        // ссылается ли нажатая кнопка на один и тот же элемент разметки
        if (clickedDotButton === slideDots[i]) {
            slides[i].classList.add('active'); // добавтить active слайду совпадающему с точкой
        }
    }
}
