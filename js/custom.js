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
