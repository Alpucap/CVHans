
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

// Window
window.addEventListener("blur", () => {
    document.title = "Hans Christian Handoto";
});

window.addEventListener("focus", () => {
    document.title = "My CV";
});

// Animation
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .colorized, .blur');

    function checkIfInView() {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            // Check if the element is in the viewport
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    function debounce(func, wait) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(func, wait);
        };
    }

    window.addEventListener('scroll', debounce(checkIfInView, 50));
    checkIfInView();
});

document.addEventListener('DOMContentLoaded', function() {
    const lightens = document.querySelectorAll('.lighten');

    function splitTextIntoLetters() {
        lightens.forEach(lightenDiv => {
            // Handle <p> elements
            const paragraphs = lightenDiv.querySelectorAll('p');
            paragraphs.forEach(paragraph => {
                const text = paragraph.textContent.trim();
                paragraph.innerHTML = ''; 

                // Break text into individual letters
                for (let i = 0; i < text.length; i++) {
                    if (text[i] === ' ') {
                        paragraph.innerHTML += ' ';
                    } else {
                        const letterSpan = document.createElement('span');
                        letterSpan.classList.add('letter');
                        letterSpan.style.setProperty('--letter-index', i + 1);
                        letterSpan.textContent = text[i];
                        paragraph.appendChild(letterSpan);
                    }
                }
            });

            // Handle <ul> elements
            const ul = lightenDiv.querySelector('ul');
            if (ul) {
                const listItems = ul.querySelectorAll('li');
                listItems.forEach(item => {
                    const text = item.textContent.trim();
                    item.innerHTML = ''; 

                    // Break text into individual letters
                    for (let i = 0; i < text.length; i++) {
                        if (text[i] === ' ') {
                            item.innerHTML += ' ';
                        } else {
                            const letterSpan = document.createElement('span');
                            letterSpan.classList.add('letter');
                            letterSpan.style.setProperty('--letter-index', i + 1);
                            letterSpan.textContent = text[i];
                            item.appendChild(letterSpan);
                        }
                    }
                });
            }
        });
    }

    function resetAnimation(lightenDiv) {
        lightenDiv.querySelectorAll('.letter').forEach(letter => {
            letter.style.animation = 'none'; 
            letter.offsetHeight; 
            letter.style.animation = ''; 
        });
    }

    function checkVisibility() {
        lightens.forEach(lightenDiv => {
            const rect = lightenDiv.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                if (!lightenDiv.classList.contains('active')) {
                    lightenDiv.classList.add('active');
                    resetAnimation(lightenDiv); 
                }
            } else {
                lightenDiv.classList.remove('active');
            }
        });
    }

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    splitTextIntoLetters();
    checkVisibility(); // Initial check

    window.addEventListener('scroll', debounce(checkVisibility, 100));
    window.addEventListener('resize', debounce(checkVisibility, 100));
});


document.addEventListener('DOMContentLoaded', function() {
    const highlights = document.querySelectorAll('.highlight');

    function splitTextIntoHighlightLetters() {
        highlights.forEach(highlightDiv => {
            // Handle text nodes inside .highlight
            const textNodes = highlightDiv.childNodes;
            textNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent.trim();
                    highlightDiv.innerHTML = ''; 

                    // Break text into individual highlight letters
                    for (let i = 0; i < text.length; i++) {
                        if (text[i] === ' ') {
                            highlightDiv.innerHTML += ' ';
                        } else {
                            const highlightLetterSpan = document.createElement('span');
                            highlightLetterSpan.classList.add('highlight-letter');
                            highlightLetterSpan.style.setProperty('--letter-index', i + 1);
                            highlightLetterSpan.textContent = text[i];
                            highlightDiv.appendChild(highlightLetterSpan);
                        }
                    }
                }
            });
        });
    }

    function resetAnimation(highlightDiv) {
        highlightDiv.querySelectorAll('.highlight-letter').forEach(letter => {
            letter.style.animation = 'none'; 
            letter.offsetHeight; 
            letter.style.animation = ''; 
        });
    }

    function checkVisibility() {
        highlights.forEach(highlightDiv => {
            const rect = highlightDiv.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                if (!highlightDiv.classList.contains('active')) {
                    highlightDiv.classList.add('active');
                    resetAnimation(highlightDiv); 
                }
            } else {
                highlightDiv.classList.remove('active');
            }
        });
    }

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    splitTextIntoHighlightLetters();
    checkVisibility(); // Initial check

    window.addEventListener('scroll', debounce(checkVisibility, 100));
    window.addEventListener('resize', debounce(checkVisibility, 100));
});
