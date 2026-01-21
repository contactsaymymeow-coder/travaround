/**
 * Trav Around - Luxury Redesign Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Signature Typing Loader Logic
    const loader = document.getElementById('loader-wrapper');
    const typingText = document.getElementById('typing-text');
    const texts = ["TRAVEL THE WORLD WITH TRAVAROUND"];
    let textIndex = 0;
    let charIndex = 0;

    if (loader && typingText) {
        function typeEffect() {
            if (charIndex < texts[textIndex].length) {
                typingText.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, 80); // Typing speed
            } else {
                // Wait after typing finishes
                setTimeout(() => {
                    if (textIndex < texts.length - 1) {
                        // Erase and move to next text
                        eraseEffect();
                    } else {
                        // Last text - fade out loader
                        setTimeout(() => {
                            loader.classList.add('fade-out'); // Adds opacity: 0 and pointer-events: none
                            setTimeout(() => {
                                loader.style.display = 'none';
                            }, 1000);
                        }, 1000);
                    }
                }, 1500);
            }
        }

        function eraseEffect() {
            if (charIndex > 0) {
                typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(eraseEffect, 40); // Erase speed
            } else {
                textIndex++;
                setTimeout(typeEffect, 200);
            }
        }

        // Start typing after initial logo reveal (800ms)
        setTimeout(typeEffect, 800);
    }

    // 2. Sophisticated Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
const topBar = document.querySelector('.top-bar');

function updateNavbar() {
    const isMobile = window.innerWidth < 992;

    if (window.scrollY > 50) {
        // SCROLLED STATE
        navbar.classList.add('scrolled');
        navbar.classList.add('navbar-light');
        navbar.classList.remove('navbar-dark');

        if (topBar && !isMobile) {
            topBar.style.transform = 'translateY(-100%)';
            navbar.style.top = '0';
        }
    } else {
        // TOP STATE
        navbar.classList.remove('scrolled');

        if (!isMobile) {
            navbar.classList.add('navbar-dark');
            navbar.classList.remove('navbar-light');
            navbar.style.top = '40px';

            if (topBar) {
                topBar.style.transform = 'translateY(0)';
            }
        } else {
            // MOBILE
            navbar.classList.add('navbar-light');
            navbar.classList.remove('navbar-dark');
            navbar.style.top = '0';
        }
    }
}

// Run on load, scroll, resize
window.addEventListener('scroll', updateNavbar);
window.addEventListener('resize', updateNavbar);
window.addEventListener('load', updateNavbar);


    // 3. AOS Initialisation
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }

    // 4. Packages Rendering Logic
    // Featured Data for Home Page
    const domesticFeatured = [
        { title: "Kashmir: Heaven on Earth", date: "Daily Departures", duration: "4 Nights / 5 Days", tag: "Best Seller", img: "images/packages/k.png", price: "12,990/-" },
        { title: "God's Own Country: Kerala", date: "Daily Departures", duration: "4 Nights / 5 Days", tag: "Nature", img: "images/packages/kerala.jpg", price: "12,490" },
        { title: "Golden Triangle: Delhi, Agra, Jaipur", date: "Daily Departures", duration: "4 Nights / 5 Days", tag: "Heritage", img: "images/packages/ag.png", price: "14,900" }
    ];

    const internationalFeatured = [
        { title: "Mystic Egypt", date: "Fixed Departures", duration: "4 Nights / 5 Days", tag: "History", img: "images/packages/egypt.jpg", price: "45,000" },
        { title: "Amazing Thailand", date: "Daily Departures", duration: "3 Nights / 4 Days", tag: "Beach", img: "images/packages/thailand.jpg", price: "16,900" },
        { title: "Luxury Maldives", date: "Daily Departures", duration: "3 Nights / 4 Days", tag: "Honeymoon", img: "images/packages/Maldives.jpg", price: "59,900" }
    ];

    // Full Data for Packages Page
    const allDomesticPackages = [
        { title: "Lakshadweep", desc: "Discover the Untouched Beauty of Lakshadweep", duration: "4 Days 3 Nights", price: "24,000", img: "images/packages/l.png" },
        { title: "Kashmir", desc: "Embark on a mesmerizing journey to Kashmir", duration: "6 Days 5 Nights", price: "14,900", img: "images/packages/kr.png" },
        { title: "Delhi, Agra & Jaipur", desc: "India's famous Golden Triangle - Delhi, Agra, and Jaipur", duration: "5 Days 4 Nights", price: "14,900", img: "images/packages/ag.png" },
        { title: "Delhi & Manali", desc: "An unforgettable journey - Delhi and Manali package.", duration: "4 Days 5 Nights", price: "9,900", img: "images/packages/d.png" },
        { title: "Hyderabad", desc: "Discover the Charms of Hyderabad- A Gem of Southern India.", duration: "4 Days 3 Nights", price: "10,900", img: "images/packages/h.png" },
        { title: "Shimla, Kulu & Manali", desc: "Explore the mesmerizing beauty of Shimla- a haven in the Himalayas", duration: "7 Days 6 Nights", price: "27,900", img: "images/packages/Shimla.png" },
        { title: "Northeast", desc: "From Misty Mountains to Lush Valleys- Northeast India's Unspoiled Delights", duration: "5 Days 4 Nights", price: "17,900", img: "images/packages/n.png" },
        { title: "Andaman", desc: "Discover the Pristine Beauty of the Bay of Bengal", duration: "5 Days 4 Nights", price: "18,900", img: "images/packages/Andaman.png" }
    ];

    const allInternationalPackages = [
        { title: "Mauritius", desc: "Experience the Ultimate Fusion of Luxury and Nature's Beauty", duration: "5 Days 4 Nights", price: "63,900", img: "images/packages/ima.png" },
        { title: "Georgia", desc: "Discover the Hidden Gems: Exploring Georgia's Untouched Beauty", duration: "5 Days 4 Nights", price: "35,900", img: "images/packages/igo.png" },
        { title: "Thailand", desc: "Thailand's Hidden Gems Await Your Exploration", duration: "5 Days 4 Nights", price: "19,900", img: "images/packages/itha.png" },
        { title: "Phuket & Krabi", desc: "Unveiling Phuket and Krabi- A Dual Delight for Adventurers", duration: "5 Days 4 Nights", price: "24,900", img: "images/packages/iph.png" },
        { title: "Sri Lanka", desc: "Sri Lanka: A Journey of Serenity and Spiritual Awakening.", duration: "4 Days 3 Nights", price: "28,900", img: "images/packages/isr.png" },
        { title: "Maldives", desc: "Unwind in Paradise- Embark on a Dreamy Journey to Maldives", duration: "4 Days 3 Nights", price: "23,900", img: "images/packages/ma.png" },
        { title: "Bali", desc: "Bali- A Dream Destination for Sun, Sand, and Serenity", duration: "5 Days 4 Nights", price: "22,900", img: "images/packages/iba.jpg" },
        { title: "Dubai", desc: "Unraveling the Magic of Dubai- A Dream Destination for Every Traveler.", duration: "5 Days 4 Nights", price: "35,900", img: "images/packages/idu.jpg" },
        { title: "Singapore & Malaysia", desc: "An unforgettable journey through Singapore and Malaysia", duration: "6 Days 5 Nights", price: "59,490", img: "images/packages/isi.jpg" },
        { title: "Kuala Lumpur & Langkawi", desc: "Discover the Enchanting Beauty of Langkawi and Kuala.", duration: "5 Days 4 Nights", price: "28,900", img: "images/packages/Kua.jpg" },
        { title: "Singapore", desc: "Discover the Enchanting Charms of Singapore- A Must-Visit Destination", duration: "4 Days 3 Nights", price: "39,900", img: "images/packages/isg.png" },
        { title: "Malaysia", desc: "Malaysia- A Paradise for Relaxation and Adventure.", duration: "4 Days 3 Nights", price: "15,900", img: "images/packages/imal.png" },
        { title: "Turkey", desc: "A Journey Through History, Culture, and Natural Beauty", duration: "9 Days 8 Nights", price: "1,40,900", img: "images/packages/ituky.jpg" },
        { title: "Vietnam & Cambodia", desc: "Journey into the Heart of Vietnam and Cambodia.", duration: "7 Days 6 Nights", price: "68,500", img: "images/packages/ivie.jpg" },
        { title: "Azerbaijan", desc: "Azerbaijan- An unforgettable journey to Azerbaijan.", duration: "4 Days 3 Nights", price: "35,490", img: "images/packages/iazer.jpg" }
    ];

    function renderPackages() {
        // Render Home Page Domestic
        const domesticContainer = document.getElementById('domestic-packages-container');
        if (domesticContainer) {
            domesticContainer.innerHTML = '';
            domesticFeatured.forEach((pkg, index) => {
                const card = createPackageCard(pkg, index);
                domesticContainer.innerHTML += card;
            });
        }

        // Render Home Page International
        const internationalContainer = document.getElementById('international-packages-container');
        if (internationalContainer) {
            internationalContainer.innerHTML = '';
            internationalFeatured.forEach((pkg, index) => {
                const card = createPackageCard(pkg, index);
                internationalContainer.innerHTML += card;
            });
        }

        // Render Packages Page Domestic
        const fullDomesticContainer = document.getElementById('domestic-packages-full-container');
        if (fullDomesticContainer) {
            fullDomesticContainer.innerHTML = '';
            allDomesticPackages.forEach((pkg, index) => {
                const card = createPackageCard(pkg, index, true);
                fullDomesticContainer.innerHTML += card;
            });
        }

        // Render Packages Page International
        const fullInternationalContainer = document.getElementById('international-packages-full-container');
        if (fullInternationalContainer) {
            fullInternationalContainer.innerHTML = '';
            allInternationalPackages.forEach((pkg, index) => {
                const card = createPackageCard(pkg, index, true);
                fullInternationalContainer.innerHTML += card;
            });
        }

        // Refresh AOS
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    function createPackageCard(pkg, index, isFullPage = false) {
        // Adjust content if it's the full page list or simplified featured list
        const descriptionOrDate = isFullPage ? pkg.desc : `<i class="far fa-calendar-alt me-2"></i> ${pkg.date}`;

        return `
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${index * 50}">
                <div class="package-card">
                    <div class="package-img-wrapper">
                        <img src="${pkg.img}" alt="${pkg.title}">
                        ${pkg.tag ? `<div class="package-tag">${pkg.tag}</div>` : ''}
                    </div>
                    <div class="package-body">
                        <h3 class="package-title serif" style="font-weight: 700; color: var(--primary-olive);">${pkg.title}</h3>
                        ${isFullPage ? `<p class="mb-3 text-muted small">${pkg.desc}</p>` : ''}
                        <div class="package-info">
                            <span><i class="far fa-clock me-2"></i> ${pkg.duration}</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <span class="package-price">Start From ₹${pkg.price}</span>
                            <a href="https://wa.me/919747443223" target="_blank" class="btn-inquire">Inquire</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Initial render
    if (document.getElementById('domestic-packages-container') || document.getElementById('domestic-packages-full-container')) {
        renderPackages();
    }

    // 5. Dynamic Reviews Logic
    const reviewsData = [
        { name: "Yusuf Murgha", role: "Verified Traveler", text: "Best and affordable tour packages. Shahid has good holiday ideas with good itinerary and content, contracts the services needed for the holiday, accommodation, transport, guides, resorts. Really had a good and stress-free memorable time.", img: "images/services/unnamed.png" },
        { name: "Ranjith", role: "Verified Traveler", text: "We had a wonderful tour experience with Trav Around Tours, Our Kashmir trip was memorable. Quality hotel and food and Very friendly local Guide. Thank you Team Trav Around.", img: "images/services/unnamed2.jpeg" },
        { name: "Shalima Rajath", role: "Verified Traveler", text: "They have brilliant deals and offers excellant service. Shahid is super efficient and quick on responses. Looking forward for more vaccays with you. Highly recommended.", img: "images/services/unnamed2.png" },
        { name: "Vishnu Prasad", role: "Verified Traveler", text: "Good communication. Fast response. Affordable rates. And also explain all details about our needs", img: "images/services/unnamed3.png" },
        { name: "Dr Tipu Sulthan", role: "Verified Traveler", text: "Kind, humble & innovative people. Always ready to help and ensure the best travel experience.", img: "images/services/unnamed4.png" },
        { name: "Shahid Nisar", role: "Verified Traveler", text: "Amazing experience! Everything was perfect from start to finish. Highly recommended.", img: "images/services/unnamed4.png" },
        { name: "v.p.v.shafi Shafi", role: "Verified Traveler", text: "Best and safe package. The team took care of everything we needed for a comfortable journey.", img: "images/services/unnamed4.png" },
        { name: "Rahulpradeep", role: "Verified Traveler", text: "Good service. Very happy with the arrangements made by the team.", img: "images/services/unnamed4.png" },
        { name: "Rajath O.M", role: "Verified Traveler", text: "Great service and friendly staff. Will definitely travel with them again.", img: "images/services/unnamed4.png" }
    ];

    function renderReviews() {
        const container = document.getElementById('reviews-container');
        const indicatorsContainer = document.getElementById('review-indicators');

        if (!container) return;

        container.innerHTML = '';
        if (indicatorsContainer) indicatorsContainer.innerHTML = '';

        // Chunk functionality to group reviews by 3
        const chunkSize = 3;
        let slideIndex = 0;

        for (let i = 0; i < reviewsData.length; i += chunkSize) {
            const chunk = reviewsData.slice(i, i + chunkSize);
            const activeClass = i === 0 ? 'active' : '';

            // Generate HTML for the 3 (or fewer) cards in this slide
            let cardsHtml = '';
            chunk.forEach(review => {
                cardsHtml += `
                    <div class="col-lg-4 col-md-6">
                        <div class="testimonial-card h-100 mx-1">
                            <img src="${review.img}" class="testimonial-img" alt="${review.name}">
                            <div class="rating-stars">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="testimonial-quote">"${review.text}"</p>
                            <h5 class="mb-1 serif">${review.name}</h5>
                            <small class="text-muted">${review.role}</small>
                        </div>
                    </div>
                `;
            });

            // Wrap cards in a row and carousel-item
            // Modified to use g-0 and minimal margins for max width
            const carouselItem = `
                <div class="carousel-item ${activeClass}" data-bs-interval="5000">
                    <div class="row g-0 justify-content-center">
                        ${cardsHtml}
                    </div>
                </div>
            `;

            container.innerHTML += carouselItem;

            // Generate Indicator
            if (indicatorsContainer) {
                const indicatorActive = i === 0 ? 'class="active" aria-current="true"' : '';
                indicatorsContainer.innerHTML += `
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="${slideIndex}" ${indicatorActive} aria-label="Slide ${slideIndex + 1}"></button>
                `;
                slideIndex++;
            }
        }
    }

    if (document.getElementById('reviews-container')) {
        renderReviews();
    }

    // 6. Smooth Scrolling (Previous Code)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = 80;
                window.scrollTo({
                    top: targetElement.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 7. Contact Form WhatsApp Redirection
    const whatsappBtn = document.getElementById('whatsapp-submit');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const mobile = document.getElementById('contact-mobile').value;
            const message = document.getElementById('contact-message').value;

            if (!name || !email || !message) {
                alert('Please fill in all required fields (Name, Email, and Message).');
                return;
            }

            const whatsappNumber = "919747443223";
            const text = `Hi Travaround, I'm interested in your services.\n\n` +
                `*Name:* ${name}\n` +
                `*Email:* ${email}\n` +
                `*Mobile:* ${mobile || 'Not provided'}\n` +
                `*Message:* ${message}`;

            const encodedText = encodeURIComponent(text);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

            window.open(whatsappURL, '_blank');
        });
    }

    // 8. Gallery Lightbox Functionality
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const galleryCards = document.querySelectorAll('.gallery-card');

    if (lightbox && lightboxImg && galleryCards.length > 0) {
        galleryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const img = card.querySelector('img');
                if (img) {
                    lightboxImg.src = img.src;
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => {
                lightboxImg.src = '';
            }, 300);
        };

        if (lightboxClose) {
            lightboxClose.addEventListener('click', (e) => {
                e.stopPropagation();
                closeLightbox();
            });
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }
});
