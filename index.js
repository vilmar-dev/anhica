
document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       01. ELEMENTS
    ===================================== */

    const landing = document.getElementById("landing");
    const seal = document.getElementById("openSeal");
    const instruction = document.getElementById("openInstruction");
    const website = document.getElementById("website");

    const categoryGrid = document.getElementById("categoryGrid");
    const categoryPages = document.getElementById("categoryPages");

    const invitationSection = document.getElementById("home");
    const guidesSection = document.getElementById("guides");
    const categoryHub = document.getElementById("categories");
    const gallerySection = document.getElementById("debutantGallery");
    const footer = document.querySelector(".website-footer");
    const backTop = document.getElementById("backTop");

    let envelopeOpened = false;
    let animationObserver = null;


    /* =====================================
       02. CATEGORY DATA
    ===================================== */

    const categories = {

        sweets: {
            number: "01",
            title: "18 Sweets",
            description: "The special people who will make this celebration sweeter and more memorable.",
            names: [
                "Shaira Ann Correa",
                "Zenk Crist Correa",
                "Maria Cristina Inalgan",
                "Annaeah Nicole Pastoral",
                "Zane Jairus Dangla",
                "Martin Dion Daet",
                "Ayesha Pace",
                "Kerby Dimco",
                "Rhian Eunice Bohol",
                "Mariel Andrea Castrence",
                "Tricia Jane Reas",
                "Cherice Jungco",
                "Jerlyn Mary Cuntapay",
                "Marc Andrei Lopina",
                "Clark Cedric Lamprea",
                "Winces Escanir",
                "Arnie Hope Laas",
                "Marisse Gigantoca"
            ]
        },

        treasures: {
            number: "02",
            title: "18 Treasures",
            description: "Eighteen wonderful people who bring priceless memories and meaning to this special day.",
            names: [
                "Henrylyn Joseph",
                "Aaron Joseph",
                "Mary Joy Correa",
                "Sharina May Castillon",
                "Trisha May Pastoral",
                "Shane Bolaños",
                "Sheina Mae Torres",
                "Xyra Margaux Boysillo",
                "Rhealyn Bacud",
                "Nzo Salazar III",
                "Ashley Shane Tulang",
                "Angel Ashley Abarquez",
                "Queen Jackielyn Pelones",
                "Zerra Ckailie Mejica",
                "Daphne Ramones",
                "Marence Legacion",
                "Aerin Gale Dangla",
                "Sophia De Guzman"
            ]
        },

        candles: {
            number: "03",
            title: "18 Candles",
            description: "Eighteen special people who will share their wishes, hopes, and heartfelt messages.",
            names: [
                "Aaron Joseph",
                "Mel Angelo Correa",
                "Mary Joy Correa",
                "Shaira Ann Correa",
                "Zenk Crist Correa",
                "Sharina May Castillon",
                "Trisha May Pastoral",
                "Annaeah Nicole Pastoral",
                "Winces Escanir",
                "Ashley Shane Tulang",
                "Angel Ashley Abarquez",
                "Tracy Daplin",
                "Rhealyn Bacud",
                "Sheina Mae Torres",
                "Zerra Ckailie Mejica",
                "Maria Marinelle Pawa",
                "Ayesha Pace",
                "Queen Jackielyn Pelones"
            ]
        },

        roses: {
            number: "04",
            title: "18 Roses",
            description: "A special tradition celebrating eighteen meaningful people who will be part of my magical day.",

            message: `A magical day!

As my special day comes closer, I have carefully chosen you to be part of this enchanting celebration. Therefore, I invite you to come join me and be a part of the 18 Roses. Your presence would mean so much to make the day more memorable and meaningful. I hope you can celebrate this special day with me as I step into a new chapter of my life. 🩷 🪄

Further details of the celebration will be sent shortly, so please wait for my next message. Thank you so much and I look forward to sharing this magical moment of my life with you!

With lots of love,
Anhica Cloe`,

            names: [
                "Jaired Gavin Correa",
                "Jairus Zachary Correa",
                "Zyle Zane Chan",
                "Aaron Joseph",
                "Mel Angelo Correa",
                "Zenk Crist Correa",
                "Vince Danielle Correa",
                "Azther James Castillon",
                "Vilmar Ammasi",
                "Tracy Daplin",
                "Martin Daet",
                "John Kyle Baco",
                "Leander San Juan",
                "Clark Cedric Lamprea",
                "Matt Bradley Evangelista",
                "Euri Ethan Dela Cruz",
                "Zane Jairus Dangla",
                "Avelino Correa II"
            ]
        },

        bills: {
            number: "05",
            title: "18 Bills",
            description: "Eighteen generous and wonderful people who are part of this meaningful birthday tradition.",
            names: [
                "Ninong Allen Costales",
                "Ninong Aldreen Costales",
                "Ninong June Barcena",
                "Ninong Kaye Siobal",
                "Ninong Mitchel Oronos",
                "Ninong Paul Panagan",
                "Ninong Vincent Carillo",
                "Ninong Adrian Navarro",
                "Ninang Jessica Jasmin Navarez",
                "Ninang Roselyn Yugas",
                "Tita Ada Pastoral",
                "Tita Ailyn Baco",
                "Tita Cathy Fiel",
                "Tito Jim Paysan",
                "Tito Marky Paysan",
                "Tito / Ninong Menard Correa",
                "Kuya Mel Angelo Correa",
                "Lolo Henry Joseph"
            ]
        },

        shots: {
            number: "06",
            title: "18 Shots",
            description: "Eighteen special people ready to share fun, laughter, and unforgettable memories.",
            names: [
                "Mel Angelo Correa",
                "Mary Joy Correa",
                "Vince Danielle Correa",
                "Shaira Ann Correa",
                "Zenk Crist Correa",
                "Aaron Joseph",
                "Clark Cedric Lamprea",
                "Maria Marinelle Pawa",
                "Mariel Andrea Castrence",
                "Rhealyn Bacud",
                "Sheina Mae Torres",
                "Cherice Jungco",
                "Zerra Ckailie Mejica",
                "Matt Bradley Evangelista",
                "Marc Andrei Lopina",
                "Rhian Eunice Bohol",
                "Martin Daet",
                "Tracy Daplin"
            ]
        }

    };


    /* =====================================
       03. GENERATE CATEGORY HUB
    ===================================== */

    function generateCategoryCards() {

        categoryGrid.innerHTML = "";

        Object.entries(categories).forEach(([id, category], index) => {

            const card = document.createElement("button");

            card.type = "button";
            card.className = "category-card reveal";
            card.dataset.target = id;

            card.style.setProperty(
                "--card-delay",
                `${index * 0.08}s`
            );

            const number = document.createElement("span");
            number.className = "category-number";
            number.textContent = category.number;

            const title = document.createElement("h3");
            title.textContent = category.title;

            const description = document.createElement("p");
            description.textContent = "18 SPECIAL PARTICIPANTS";

            const arrow = document.createElement("span");
            arrow.className = "card-arrow";
            arrow.textContent = "↓ VIEW NAMES";

            card.append(number, title, description, arrow);

            categoryGrid.appendChild(card);

        });

    }


    /* =====================================
       04. GENERATE INDIVIDUAL CATEGORY PAGES
    ===================================== */

    function generateCategoryPages() {

        categoryPages.innerHTML = "";

        Object.entries(categories).forEach(([id, category]) => {

            const page = document.createElement("section");

            page.className = "individual-category-page";
            page.id = `page-${id}`;
            page.hidden = true;

            // TOP BACK BUTTON

            const backButton = document.createElement("button");

            backButton.type = "button";
            backButton.className = "page-back-button";
            backButton.textContent = "← BACK TO CATEGORIES";

            // HEADER

            const header = document.createElement("header");

            header.className = "individual-page-header";

            const kicker = document.createElement("p");
            kicker.className = "page-kicker";
            kicker.textContent = "ANHICA CLOE'S 18TH BIRTHDAY";

            const number = document.createElement("span");
            number.className = "page-number";
            number.textContent = category.number;

            const title = document.createElement("h2");
            title.textContent = category.title;

            const ornament = document.createElement("div");
            ornament.className = "page-ornament";
            ornament.textContent = "✦";

            const description = document.createElement("p");
            description.textContent = category.description;

            header.append(kicker, number, title, ornament, description);

            // SPECIAL 18 ROSES MESSAGE

            let messageBox = null;

            if (category.message) {

                messageBox = document.createElement("div");
                messageBox.className = "roses-invitation-message";

                const message = document.createElement("p");
                message.textContent = category.message;

                messageBox.appendChild(message);

            }

            // PARTICIPANT COUNT

            const count = document.createElement("div");

            count.className = "individual-page-count";
            count.textContent = `${category.names.length} SPECIAL PARTICIPANTS`;

            // PARTICIPANT GRID

            const grid = document.createElement("div");

            grid.className = "individual-participant-grid";

            category.names.forEach((name, index) => {

                const participant = document.createElement("article");

                participant.className = "individual-participant-card";

                participant.style.setProperty(
                    "--delay",
                    `${index * 0.055}s`
                );

                const participantNumber = document.createElement("span");

                participantNumber.className = "individual-participant-number";

                participantNumber.textContent =
                    String(index + 1).padStart(2, "0");

                const participantName = document.createElement("span");

                participantName.className = "individual-participant-name";
                participantName.textContent = name;

                participant.append(
                    participantNumber,
                    participantName
                );

                grid.appendChild(participant);

            });

            // BOTTOM BACK BUTTON

            const bottomBack = document.createElement("button");

            bottomBack.type = "button";
            bottomBack.className = "page-back-button page-back-bottom";
            bottomBack.textContent = "← BACK TO CATEGORIES";

            // ASSEMBLE PAGE

            page.append(backButton, header);

            if (messageBox) {
                page.appendChild(messageBox);
            }

            page.append(count, grid, bottomBack);

            categoryPages.appendChild(page);

        });

    }


    /* =====================================
       05. INITIALIZE CATEGORY PAGES
    ===================================== */

    generateCategoryCards();
    generateCategoryPages();


    /* =====================================
       06. OPEN INDIVIDUAL CATEGORY PAGE
    ===================================== */

    function openCategoryPage(id) {

        if (!categories[id]) return;

        const page = document.getElementById(`page-${id}`);

        if (!page) return;

        // Hide all main website sections

        invitationSection.hidden = true;
        guidesSection.hidden = true;
        categoryHub.hidden = true;
        gallerySection.hidden = true;
        footer.hidden = true;

        // Hide all category pages

        categoryPages.querySelectorAll(".individual-category-page")
            .forEach(item => {

                item.hidden = true;
                item.classList.remove("page-active");

            });

        // Display selected category page

        categoryPages.hidden = false;
        page.hidden = false;

        // Scroll to top

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        // Restart page animation

        requestAnimationFrame(() => {

            page.classList.remove("page-active");

            void page.offsetWidth;

            page.classList.add("page-active");

        });

    }


    /* =====================================
       07. BACK TO CATEGORY HUB
    ===================================== */

    function backToCategories() {

        categoryPages.hidden = true;

        categoryPages.querySelectorAll(".individual-category-page")
            .forEach(item => {

                item.hidden = true;
                item.classList.remove("page-active");

            });

        // Restore all website sections

        invitationSection.hidden = false;
        guidesSection.hidden = false;
        categoryHub.hidden = false;
        gallerySection.hidden = false;
        footer.hidden = false;

        // Return to category hub

        requestAnimationFrame(() => {

            categoryHub.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }


    /* =====================================
       08. NAVIGATION EVENTS
    ===================================== */

    document.addEventListener("click", (event) => {

        const categoryButton = event.target.closest(".category-card");

        if (categoryButton) {

            openCategoryPage(categoryButton.dataset.target);

            return;

        }

        const backButton = event.target.closest(".page-back-button");

        if (backButton) {

            backToCategories();

        }

    });


    /* =====================================
       09. ENVELOPE OPENING
    ===================================== */

    seal.addEventListener("click", () => {

        if (envelopeOpened) return;

        envelopeOpened = true;

        landing.classList.add("opening");

        instruction.style.opacity = "0";

        document.body.style.overflow = "hidden";

        setTimeout(() => {

            landing.classList.add("leaving");

        }, 1100);

        setTimeout(() => {

            landing.hidden = true;

            website.hidden = false;

            // Start invitation entrance animation

            website.classList.remove("site-enter");

            void website.offsetWidth;

            website.classList.add("site-enter");

            document.body.style.overflow = "";

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

            // Activate scroll animations

            observeAnimations();

        }, 1900);

    });


    /* =====================================
       10. BACK TO TOP
    ===================================== */

    if (backTop) {

        backTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================
       11. SECTION-SPECIFIC SCROLL ANIMATIONS
    ===================================== */

    function observeAnimations() {

        const sections = website.querySelectorAll(
            ".invitation-section, " +
            ".guides-section, " +
            ".category-hub, " +
            ".gallery-section, " +
            ".website-footer"
        );

        if (animationObserver) {

            animationObserver.disconnect();

        }

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        // Fallback for accessibility or unsupported browsers

        if (
            reduceMotion ||
            !("IntersectionObserver" in window)
        ) {

            sections.forEach(section => {

                section.classList.add("section-visible");

                section.querySelectorAll(".reveal").forEach(element => {

                    element.classList.add("visible");

                });

            });

            return;

        }

        animationObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const section = entry.target;

                    section.classList.add("section-visible");

                    section.querySelectorAll(".reveal").forEach(element => {

                        element.classList.add("visible");

                    });

                    observer.unobserve(section);

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -35px 0px"
            }
        );

        sections.forEach(section => {

            animationObserver.observe(section);

        });

    }


    /* =====================================
       12. INITIALIZATION
    ===================================== */

    console.log("Anhica Cloe Birthday Website Loaded!");

    console.log(
        "Categories:",
        Object.keys(categories).length
    );

    console.log(
        "Total Participants:",
        Object.values(categories).reduce(
            (total, category) => total + category.names.length,
            0
        )
    );

    console.log("Debutant Gallery: 3 photo sections");

});
