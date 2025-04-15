
// Scroll Reveal
const scrollElements = document.querySelectorAll('[data-scroll]');

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= window.innerHeight * 0.9;
};

const displayScrollElement = (element) => {
    element.setAttribute('data-scroll', 'in');
};

const handleScroll = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScroll);
