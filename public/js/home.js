// Navbar Hamburger
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger'); 
    const navItem = document.querySelector('.nav-item'); 
    const navLinks = navItem.querySelectorAll('a'); 
    
    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        navItem.classList.toggle('active'); 
    });

    document.addEventListener('click', function(event) {
        if (!navItem.contains(event.target) && !hamburger.contains(event.target)) {
            navItem.classList.remove('active');
        }
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navItem.classList.remove('active');
        });
    });
    
});


// Carousel operation
document.addEventListener("DOMContentLoaded", function() {
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const track = document.querySelector(".track");

    const NUM_SLIDES = 4;

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

// Window
window.addEventListener("blur", () => {
    document.title = "Hans Christian Handoto";
});
window.addEventListener("focus", () => {
    document.title = "My CV";
});

// Scroll detection, Language bar, and Experience image animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .colorized, .blur');
    const languageBars = document.querySelectorAll('.language-bar .bar');
    let hasAnimated = false;

    function checkIfInView() {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });

        const languageSection = document.querySelector('.language-proficiency');
        const sectionRect = languageSection.getBoundingClientRect();

        if (sectionRect.top >= 0 && sectionRect.bottom <= window.innerHeight) {
            if (!hasAnimated) {
                hasAnimated = true; 
                languageBars.forEach(bar => {
                    bar.classList.add('active'); 
                });
            }
        } else {
            hasAnimated = false; 
            languageBars.forEach(bar => {
                bar.classList.remove('active');
            });
        }
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

// Experience text and object animation
document.addEventListener('DOMContentLoaded', function() {
    const lightens = document.querySelectorAll('.lighten');

    function splitTextIntoLetters() {
        lightens.forEach(lightenDiv => {
            const paragraphs = lightenDiv.querySelectorAll('p');
            paragraphs.forEach(paragraph => {
                const text = paragraph.textContent.trim();
                paragraph.innerHTML = ''; 

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

            const ul = lightenDiv.querySelector('ul');
            if (ul) {
                const listItems = ul.querySelectorAll('li');
                listItems.forEach(item => {
                    const text = item.textContent.trim();
                    item.innerHTML = ''; 

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

    // Experience Objects
    const POUTexperiences = [
        { experience: "BPH 2023/2024 | Prayer Division", date: "2023-2024" },
        { experience: "PMB POUT 23 | Business Funds Division", date: "2023" },
        { experience: "Christmas POUT 23 | Equipment Division", date: "2023" },
        { experience: "Easter POUT 24 | Volunteer", date: "2024" },
        { experience: "Social Service POUT 24 | Equipment Division", date: "2024" },
        { experience: "KK POUT 23 | Volunteering as Interviewer", date: "2023" }
    ];

    const Huaweiexperiences = [
        { experience: "HCIA - AI", date: "2023" },
    ];

    const FTIUNTARexperiences = [
        { experience: "Data Structure Lab Instructor", date: "2024" },
        { experience: "Finalist Web Development FTI Comp", date: "2024" },
    ];

    const Varanityexperiences = [
        { experience: "Creative", date: "2024" },
        { experience: "Design Graphic", date: "2024" },
        { experience: "Editor", date: "2024" },
    ];

    // Function to add items to the list
    function addItemsToList(items, listId) {
        const ul = document.getElementById(listId);
        items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.experience} <span class="date">[${item.date}]</span>`;
            ul.appendChild(li);
        });
    }

    // Add experiences to their respective lists
    addItemsToList(POUTexperiences, 'POUT-list');
    addItemsToList(Huaweiexperiences, 'Huawei-list');
    addItemsToList(FTIUNTARexperiences, 'FTIUNTAR-list');
    addItemsToList(Varanityexperiences, 'Varanity-list');


    splitTextIntoLetters();
    checkVisibility(); 

    window.addEventListener('scroll', debounce(checkVisibility, 100));
    window.addEventListener('resize', debounce(checkVisibility, 100));
});

//About me text highlight animation
document.addEventListener('DOMContentLoaded', function() {
    const highlights = document.querySelectorAll('.highlight');

    function splitTextIntoHighlightLetters() {
        highlights.forEach(highlightDiv => {
            const textNodes = highlightDiv.childNodes;
            textNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent.trim();
                    highlightDiv.innerHTML = ''; 

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

//Academic image hovering animation
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.academic-item-child img');
    const hoverArea_untar = document.querySelector('.academic-item-child .untar');
    const hoverArea_sma = document.querySelector('.academic-item-child .sman19')

    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            images.forEach(i => {
                if (i !== img) {
                    i.classList.add('hovering'); 
                }
            });
        });

        img.addEventListener('mouseout', () => {
            images.forEach(i => {
                i.classList.remove('hovering'); 
            });
        });
    });

    function setHoverStyles(hoverArea, bgColor, primaryColor, secondaryColor, textColor, accentColor) {
        hoverArea.addEventListener('mouseover', () => {
            document.documentElement.style.setProperty('--bg-color', bgColor); 
            document.documentElement.style.setProperty('--primary-color', primaryColor); 
            document.documentElement.style.setProperty('--secondary-color', secondaryColor); 
            document.documentElement.style.setProperty('--text-color', textColor); 
            document.documentElement.style.setProperty('--accent-color', accentColor);
        });
    
        hoverArea.addEventListener('mouseout', () => {
            document.documentElement.style.setProperty('--bg-color', '#1c1c1c'); 
            document.documentElement.style.setProperty('--primary-color', '#84b7dc'); 
            document.documentElement.style.setProperty('--secondary-color', '#c1ddf0'); 
            document.documentElement.style.setProperty('--text-color', '#F1F1F1'); 
            document.documentElement.style.setProperty('--accent-color', '#06F7FF');
        });
    }
    
    setHoverStyles(hoverArea_untar, '#1c1c1c', '#9b1625', '#F5B7B1', '#F1F1F1', '#f8233b');

    setHoverStyles(hoverArea_sma, '#1c1c1c', '#1d67ad', '#f7ee7e', '#F1F1F1', '#398ede');
    
});

