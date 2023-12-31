function slider() {
    const slides = document.querySelectorAll('.main__img'),
        sliderWrapper = document.querySelector('.slider__wrapper'),
        prev = document.querySelector('.prev__item'),
        next = document.querySelector('.next__item'),
        current = document.querySelector('.count__current'),
        total = document.querySelector('.count__total'),
        slidesWrapper = document.querySelector('.slide__wrapper'),
        slidesField = document.querySelector('.slide__wrapper-inner'),
        width = window.getComputedStyle(slidesWrapper).width;

    let offset = 0;
    let slideIndex = 1;


    function showDots(arr) {
    arr.forEach(dot => dot.style.opacity = '.5');
    arr[slideIndex - 1].style.opacity = 1;
    }

    if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
    } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";

    slidesWrapper.style.overflow = "hidden";

    slides.forEach((slide) => {
    slide.style.width = width;
    });    

    sliderWrapper.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];

    indicators.classList.add('carousel-indicators');
    sliderWrapper.append(indicators);


    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }


    next.addEventListener("click", () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }

    showDots(dots);

    });

    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }

    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }

    showDots(dots);

    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            showDots(dots);
            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
                } else {
                current.textContent = slideIndex;
            }
        });
    });

}

module.exports = slider;