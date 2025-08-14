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
if (document.querySelector('.video-container') != null) {
    document.addEventListener("DOMContentLoaded", () => {
        let player = document.getElementById("player"),
            play = document.getElementById("play");
        videoContainer = document.querySelector('.video-container');

        play.addEventListener("click", function () {
            player.play();
            player.parentElement.classList.add('playing');
            player.parentElement.classList.remove('pause');
        });

        player.addEventListener("click", function (e) {
            if (!play.contains(e.target)) {
                this.pause();
                player.parentElement.classList.remove('playing');
                player.parentElement.classList.add('pause');
            }
        });
        // Pause on hover
        videoContainer.addEventListener("mouseenter", function () {
            player.pause();
            player.parentElement.classList.remove('playing');
            player.parentElement.classList.add('pause');
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
    }
});
