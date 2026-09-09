/* =========================================
   AVNI MEHTA PORTFOLIO JAVASCRIPT
   ========================================= */


/* ---------- HEADER SCROLL EFFECT ---------- */

const header = document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* ---------- MOBILE MENU ---------- */

const menuButton = document.querySelector("#menuButton");

const navLinks = document.querySelector("#navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("open");

});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

    });

});



/* ---------- SCROLL REVEAL ---------- */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {

        threshold: 0.12

    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});



/* ---------- ACTIVE NAVIGATION ---------- */

const sections = document.querySelectorAll("main section");

const navigationItems = document.querySelectorAll(".nav-links a");


const sectionObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) {

                return;

            }


            navigationItems.forEach(function (item) {

                item.classList.remove("active");

            });


            const activeLink = document.querySelector(

                `.nav-links a[href="#${entry.target.id}"]`

            );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        });

    },

    {

        rootMargin: "-35% 0px -55% 0px"

    }

);


sections.forEach(function (section) {

    sectionObserver.observe(section);

});



/* ---------- COPYRIGHT YEAR ---------- */

const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();



/* ---------- CONTACT FORM ---------- */

const contactForm = document.querySelector("#contactForm");

const formStatus = document.querySelector("#formStatus");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name = document.querySelector("#name").value.trim();

    const email = document.querySelector("#email").value.trim();

    const subject = document.querySelector("#subject").value.trim();

    const message = document.querySelector("#message").value.trim();


    if (!name || !email || !subject || !message) {

        formStatus.textContent =
            "Please complete all fields before sending.";

        return;

    }


    const receiver = "mehtavni2007@gmail.com";


    const emailBody =

        "Name: " + name +

        "\nEmail: " + email +

        "\n\nMessage:\n" + message;


    const mailtoLink =

        "mailto:" + receiver +

        "?subject=" +

        encodeURIComponent(subject) +

        "&body=" +

        encodeURIComponent(emailBody);


    window.location.href = mailtoLink;


    formStatus.textContent =

        "Opening your email application...";

});