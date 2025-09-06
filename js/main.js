// Enhanced JavaScript for Al Salamah Golden Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Animate hamburger lines
            hamburgerLines.forEach((line, index) => {
                if (mobileMenu.classList.contains('hidden')) {
                    // Close animation
                    line.style.transform = '';
                    line.style.opacity = '1';
                } else {
                    // Open animation
                    if (index === 0) {
                        line.style.transform = 'rotate(45deg) translateY(6px)';
                    } else if (index === 1) {
                        line.style.opacity = '0';
                    } else if (index === 2) {
                        line.style.transform = 'rotate(-45deg) translateY(-6px)';
                    }
                }
            });
        });
    }

    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
                // Reset hamburger animation
                hamburgerLines.forEach(line => {
                    line.style.transform = '';
                    line.style.opacity = '1';
                });
            }
        });
    });

    // Smooth scroll for internal links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const elementPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id], div[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-primary');
            link.classList.add('text-secondary');
            
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.remove('text-secondary');
                link.classList.add('text-primary');
            }
        });
    }

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call

    // Header background on scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('bg-white/95', 'backdrop-blur-sm');
            } else {
                header.classList.remove('bg-white/95', 'backdrop-blur-sm');
            }
        });
    }

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Form validation (if contact form exists)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = this.querySelector('input[name="name"]')?.value;
            const email = this.querySelector('input[name="email"]')?.value;
            const message = this.querySelector('textarea[name="message"]')?.value;
            
            if (!name || !email || !message) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('يرجى إدخال عنوان بريد إلكتروني صحيح');
                return;
            }
            
            // Success message
            alert('تم إرسال الرسالة بنجاح! سنتواصل معكم قريباً.');
            this.reset();
        });
    }

    // Loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Add loading placeholder
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
});

// Legacy support for existing swiper functionality
if (typeof Swiper !== 'undefined') {
    // Home slider
    var homeSlider = new Swiper(".home-slid", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });

    // Team slider
    var teamSlider = new Swiper(".team-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            "0": {
                slidesPerView: 1,
            },
            "768": {
                slidesPerView: 2,
            },
            "1020": {
                slidesPerView: 3,
            },
        },
    });
}

// Utility functions
window.AlSlamahGolden = {
    // Scroll to top function
    scrollToTop: function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    },
    
    // Toggle mobile menu programmatically
    toggleMobileMenu: function() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    },
    
    // Show/hide loading spinner
    showLoading: function() {
        const loader = document.createElement('div');
        loader.id = 'page-loader';
        loader.className = 'fixed inset-0 bg-white/80 flex items-center justify-center z-50';
        loader.innerHTML = '<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>';
        document.body.appendChild(loader);
    },
    
    hideLoading: function() {
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.remove();
        }
    }
};