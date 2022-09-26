const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);

const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
//arrange the slides next to one another
const setSledePosition = (slide, index)=> {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSledePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide')
targetDot.classList.add('current-slide')
}


//When I click the nav indicators move to that slide
dotsNav.addEventListener('click', e=> {
    //what indicator is clicked on?
    const targetDot = e.target.closest('button') ;

if(!targetDot) return;

const currentSlide = track.querySelector('.current-slide');
const currentDot = dotsNav.querySelector('.current-slide')
const targetIndex = dots.findIndex(dot => dot === targetDot)
const targetSlide = slides[targetIndex];
moveToSlide(track, currentSlide, targetSlide)

updateDots(currentDot, targetDot);

})


    window.setInterval(function() {
        const firstSlide = slides[0];
       
        const targetDot = dotsNav.querySelector('.current-slide');
     const targetIndex = dots.findIndex(dot => dot ===targetDot)
         const currentSlide = track.querySelector('.current-slide');
         const nextSlide = targetIndex === slides.length -1 ? firstSlide : currentSlide.nextElementSibling;
     
         moveToSlide(track, currentSlide, nextSlide);
     
         const firstDot = dots[0];
         const currentDot = dotsNav.querySelector('.current-slide')
     const nextDot = targetIndex === slides.length -1 ? firstDot : currentDot.nextElementSibling;
     
     updateDots(currentDot, nextDot)
     
     
     
       }, 5000);
