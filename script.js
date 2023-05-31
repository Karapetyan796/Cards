const slides = document.querySelectorAll('.slide');



slides.forEach( slide => {
    slide.addEventListener('click', () => {
        clearActiveClass();
        slide.classList.add('active');
    });
});

function clearActiveClass(){
    slides.forEach( slide => {
        slide.classList.remove('active');
    });
};



// 

function randomNumber (min, max){
    return Math.round(Math.random() * (max - min) + min);
};
const index = randomNumber(0, slides.length-1);

function slidePlugin(activeSlide){
    slides[activeSlide].classList.add('active');
};

slidePlugin(index);