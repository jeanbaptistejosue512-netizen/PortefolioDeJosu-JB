
    /* ================= MOBILE MENU ================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("show");

        menuBtn.innerHTML =
            navbar.classList.contains("show")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });


    /* Fermer menu après clic */

    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("show");

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });


    /* ================= ACTIVE NAV ================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });


    /* ================= REVEAL ANIMATION ================= */

    const revealElements =
        document.querySelectorAll(
            ".section, .project-card, .service-item, .about-card, .skill"
        );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* ================= CONTACT ================= */

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert(
            "Merci pour votre message ! Le formulaire doit être connecté à un service backend ou à un service d'envoi d'e-mails."
        );

    });


    /* ================= CURSOR ================= */

    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    document.addEventListener("mousemove", e => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        setTimeout(() => {

            follower.style.left = e.clientX + "px";
            follower.style.top = e.clientY + "px";

        }, 60);

    });