
// Carousel
document.addEventListener("DOMContentLoaded", function() {
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const track = document.querySelector(".track");

    const NUM_SLIDES = 3;

    let currSlide = 1;

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

// Mendengarkan peristiwa window
window.addEventListener("blur", () => {
    document.title = "Hans Christian Handoto";
});

window.addEventListener("focus", () => {
    document.title = "My CV";
});
