// variables declaration
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navbar = document.getElementById('nav');
const fixedNav = document.querySelector('.fixed-nav');
const header = document.querySelector('.header');
const topLink = document.querySelector('.top-link');
const scrollLinks = document.querySelectorAll('.scroll-link');
const logo = document.querySelector('.logo');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
const btns = document.querySelectorAll('.btn');
const articles = document.querySelectorAll('.content');
const date = document.getElementById('date');

// slider
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});

let counter = 0;
nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
});
prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
});

function carousel() {

    // if (counter === slides.length) {

    //     counter = 0;
    // }
    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }

    if (counter < slides.length - 1) {
        nextBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'none';
    }
    if (counter > 0) {
        prevBtn.style.display = 'inline-block';
    } else {
        prevBtn.style.display = 'none';
    }

    slides.forEach(slide => {
        slide.style.transform = `translate(-${counter * 100}%)`;
    })
}


// set date
date.innerHTML = new Date().getFullYear();

// menu toggle
navToggle.addEventListener('click', () => {
    linksContainer.classList.toggle('hidden');
    const closeMenu = document.querySelector('.close-menu');
    const openMenu = document.querySelector('.open-menu');
    openMenu.classList.toggle('hidden');
    closeMenu.classList.toggle('hidden');

    // linksContainer.style.display = "";
    // const containerHeight = linksContainer.getBoundingClientRect().height;
    // const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);

    // if (containerHeight === 0) {
    //     linksContainer.style.height = `${linksHeight}px`;
    // } else {
    //     linksContainer.style.height = 0;
    // }

});

// scroll to links
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollHeight = window.pageYOffset;
    const navHeight = header.getBoundingClientRect().height;
    const navCenter = document.querySelector('.nav-center');

    if (scrollHeight > 100) {

        header.classList.add('fixed-nav');
        navCenter.classList.remove('bg-gradient-to-t');
        links.classList.add('text-color');
        navToggle.classList.add('text-color');
        logo.classList.add('text-color');
    } else {
        header.classList.remove('fixed-nav');
        navCenter.classList.add('bg-gradient-to-t');
        links.classList.remove('text-color');
        navToggle.classList.remove('text-color');
        logo.classList.remove('text-color');
    }

    //scroll back to top of page
    if (scrollHeight > 800 && scrollHeight > navHeight) {
        topLink.classList.remove('hidden');
    } else {
        topLink.classList.add('hidden');
    }
});

//Smooth scroll to exact position
window.addEventListener('DOMContentLoaded', () => {

    scrollLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // navigate to specific spot
            const id = e.currentTarget.getAttribute('href').slice(1);
            const element = document.getElementById(id);

            // calculate the heights
            const navHeight = navbar.getBoundingClientRect().height;
            const containerHeight = linksContainer.getBoundingClientRect().height;

            const fixedNav = navbar.classList.contains('fixed-nav')

            let position = element.offsetTop - navHeight;
            if (!fixedNav) {
                position = position - navHeight;
            }

            if (navHeight > 82) {
                position = position + containerHeight;
            }

            window.scrollTo({
                left: 0,
                top: position,
            });
            linksContainer.classList.toggle('hidden');
            closeMenu.classList.add('hidden');
            openMenu.classList.remove('hidden');

        });
    });
})

//toggle articles and active class
const about = document.querySelector('.about');
about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        // remove active from other buttons
        btns.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        // hide other articles
        articles.forEach((article) => {
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});

// switch to active tab

links.addEventListener('click', (e) => {
    const li = e.target.dataset;
    if (li) {
        // remove active from other buttons
        scrollLinks.forEach((scroll) => {
            scroll.classList.remove('active-tab');
            e.target.classList.add('active-tab');
        });

    }
});