// Carousel
document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel"); 

    carousels.forEach(carousel => {
        const nextBtn = carousel.querySelector(".next"); 
        const prevBtn = carousel.querySelector(".prev"); 
        const track = carousel.querySelector(".track"); 

        const NUM_SLIDES = track.children.length; 
        let currSlide = 0; 

        function slideTrack() {
            track.style.transform = `translateX(${-currSlide * 100}%)`;
        }

        nextBtn.addEventListener("click", () => {
            currSlide = (currSlide + 1) % NUM_SLIDES; 
            slideTrack();
        });

        prevBtn.addEventListener("click", () => {
            currSlide = (currSlide - 1 + NUM_SLIDES) % NUM_SLIDES; 
            slideTrack();
        });
    });
});