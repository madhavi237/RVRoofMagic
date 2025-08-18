// *********************** Add dynamically adding favicon icon ***********************//
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/svg+xml';
link.href = './images/favicon.svg';
document.head.appendChild(link);


// ******************** Add jquery to add or remove class to the header *******************//
jQuery(document).ready(function ($) {
    let lastScrollTop = 0;

    $(window).on("scroll", function () {
        let st = $(this).scrollTop();

        if (st > lastScrollTop && st > 50) {
            // Scrolling down
            $('#dynamic').addClass('scrolled');
        } else {
            // Scrolling up
            $('#dynamic').removeClass('scrolled');
        }

        lastScrollTop = st;
    });
});


// ********************  Add jquery to Insert the current Year *******************//
jQuery(document).ready(function ($) {
    var year = new Date().getFullYear();
    $('#currentyear').text(year);
});


// ***************** Add close icon when the user types in search input *****************//
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchbar");

    searchBar.addEventListener("input", function () {
        if (this.value.trim().length > 0) {
            this.classList.add("close");
        } else {
            this.classList.remove("close");
        }
    });
    // click close icon
    searchBar.addEventListener("click", function (e) {
        const iconArea = searchBar.offsetWidth - 40; // 40px right side for icon
        if (e.offsetX > iconArea && this.classList.contains("close")) {
            this.value = "";
            this.classList.remove("close");
        }
    });
});


// video js
if (document.querySelector('.video-wrapper') != null) {
    document.addEventListener("DOMContentLoaded", () => {
        const videoContainers = document.querySelectorAll(".video-container");

        videoContainers.forEach(container => {
            const player = container.querySelector(".player");
            const playBtn = container.querySelector(".play");

            playBtn.addEventListener("click", () => {
                player.play();
                container.classList.add("playing");
                container.classList.remove("pause");
            });

            player.addEventListener("click", (e) => {
                if (!playBtn.contains(e.target)) {
                    player.pause();
                    container.classList.remove("playing");
                    container.classList.add("pause");
                }
            });

            // pause on hover
            container.addEventListener("mouseenter", () => {
                player.pause();
                container.classList.remove("playing");
                container.classList.add("pause");
            });
        });
    });
}

// Add jquery to before after image slider
jQuery(function ($) {
    let before = $('.slider-bef');
    let handle = $('.handle-wrapper');
    let slider = $('.before-after-img');
    let tooltip = $('.slider-tip');

    let sliderWidth = slider.width();
    let startClip = sliderWidth * 2 / 3; // Initial clip position

    // Set initial clip for before img
    before.css('clip-path', `inset(0 ${sliderWidth - startClip}px 0 0)`);
    handle.css('left', startClip + 'px');

    function updateClip() {
        let handleLeft = parseInt(handle.css('left'), 10);
        let rightClip = sliderWidth - handleLeft;
        before.css('clip-path', `inset(0 ${rightClip}px 0 0)`);
    }

    // Make the handle draggable
    handle.draggable({
        containment: slider,
        axis: 'x',
        drag: updateClip
    });

    // Hide tooltip on click
    slider.on('mousedown', function () {
        tooltip.fadeOut(10);
    });
});


// Add read-more and less text
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.read-more-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            let reviewText = this.previousElementSibling;
            reviewText.classList.toggle('expanded');
            this.textContent = reviewText.classList.contains('expanded')
                ? 'Read Less...'
                : 'Read More...';
        });
    });
});


// ******************** Add Main slider js ******************* //
const swiper = new Swiper('#MainSlider', {
    slidesPerView: 1,
    speed: 500,
    loop: true,
    allowTouchMove: false,

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev'
    },
    breakpoints: {
        0: {

        },

        768: {
            spaceBetween: 20,
        },

        991: {
            spaceBetween: 30,
        },
    },
});


// ******************** Custom Tabs js ******************* //
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // remove active class
            tabButtons.forEach(b => b.classList.remove("active"));
            tabPanels.forEach(panel => panel.classList.remove("active"));

            // add active class to clicked button
            btn.classList.add("active");
            document.getElementById(btn.dataset.tab).classList.add("active");
        });
    });
});
