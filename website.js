document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.nav-item');

    // Add event listeners for each nav item
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add 'active' class to the clicked item
            this.classList.add('active');
            
            // Load the respective page here with animation
            let targetPage = this.id + '.html';  // E.g., 'home.html', 'services.html'
            loadPage(targetPage);
        });

        // Hover effect to show text
        item.addEventListener('mouseover', function () {
            const text = this.querySelector('.nav-text');
            text.style.display = 'block';
        });

        item.addEventListener('mouseout', function () {
            const text = this.querySelector('.nav-text');
            text.style.display = 'none';
        });
    });

    // Load page function with simple animation
    function loadPage(page) {
        const contentDiv = document.querySelector('.contents');
        contentDiv.classList.add('fade-out');
        setTimeout(() => {
            fetch(page)
                .then(response => response.text())
                .then(data => {
                    contentDiv.innerHTML = data; // Inject new content
                    contentDiv.classList.remove('fade-out'); // Remove fade-out once new content is loaded
                    // Find the nav item that matches the page and add 'active' class
                    const matchingNavItem = Array.from(navItems).find(item => item.id === page.replace('.html', ''));
                    if (matchingNavItem) {
                        navItems.forEach(nav => nav.classList.remove('active')); // Ensure only one item is active
                        matchingNavItem.classList.add('active');
                    }
                })
                .catch(error => console.error('Error loading page:', error));
        }, 500); // Adjust this delay for the fade-out effect
    }

    // Script for the slider functionality
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slideCount) index = 0;
        if (index < 0) index = slideCount - 1;
        slides.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    prevButton.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    // Auto-slide every 5 seconds
    setInterval(function() {
        showSlide(currentIndex + 1);
    }, 5000);
});
