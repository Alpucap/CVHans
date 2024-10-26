// Navbar Hamburger
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger'); 
    const navItem = document.querySelector('.nav-item'); 

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        navItem.classList.toggle('active'); 
    });

    document.addEventListener('click', function(event) {
        if (!navItem.contains(event.target) && !hamburger.contains(event.target)) {
            navItem.classList.remove('active');
        }
    });
});

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