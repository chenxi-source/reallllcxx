<!-- ========== js/script.js ========== -->
<script>
    // Mobile menu toggle
    document.addEventListener('DOMContentLoaded', function() {
        const toggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        if (toggle) {
            toggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Carousel functionality (only on pages where carousel exists)
        const carousel = document.querySelector('.carousel-container');
        if (carousel) {
            const slides = document.querySelector('.carousel-slides');
            const slideItems = document.querySelectorAll('.carousel-slide');
            const prevBtn = document.querySelector('.carousel-control.prev');
            const nextBtn = document.querySelector('.carousel-control.next');
            const dotsContainer = document.querySelector('.carousel-dots');
            let currentIndex = 0;
            const slideCount = slideItems.length;

            // Create dots
            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.dataset.index = i;
                dotsContainer.appendChild(dot);
            }
            const dots = document.querySelectorAll('.dot');
            updateDots();

            function updateSlide(index) {
                if (index < 0) index = slideCount - 1;
                if (index >= slideCount) index = 0;
                slides.style.transform = `translateX(-${index * 100}%)`;
                currentIndex = index;
                updateDots();
            }

            function updateDots() {
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentIndex);
                });
            }

            prevBtn.addEventListener('click', () => updateSlide(currentIndex - 1));
            nextBtn.addEventListener('click', () => updateSlide(currentIndex + 1));

            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const idx = parseInt(e.target.dataset.index);
                    updateSlide(idx);
                });
            });

            // Auto play
            setInterval(() => {
                updateSlide(currentIndex + 1);
            }, 5000);
        }

        // Contact form handling
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const message = document.getElementById('message').value.trim();
                if (name && email && message) {
                    document.getElementById('formFeedback').innerText = 'Thank you! Your message has been sent. (Demo)';
                    contactForm.reset();
                } else {
                    document.getElementById('formFeedback').innerText = 'Please fill all fields.';
                }
            });
        }
    });
</script>