class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <header id="dynamic">
                <nav class="navbar">
                    <div class="navbar-branding">
                        <a class="navbar-brand" href="">
                            <img src="./images/rv-roof-magic-logo.svg" alt="rv-roof-magic" />
                        </a>
                       
                    </div>
                    <div class="menu-wrapper">
                        <div class="menu-wrapper">
                            <button class="menu-toggle" id="MenuToggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <ul class="nav p-0" id="NavMenu">
                                <li class="nav-item"><a href="index.html" class="nav-link">Home</a>
                                </li>
                                <li class="nav-item"><a href="shop-now.html" class="nav-link">Shop Now</a></li>

                                <li class="nav-item dropdown">
                                    <a href="browse-site" class="nav-link">Browse Site</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="about-us.html" class="nav-link">About Us</a></li>
                                        <li><a href="photo-gallery" class="nav-link">Photo and Video Gallery</a></li>
                                        <li><a href="application-process" class="nav-link">Application Process</a></li>
                                        <li><a href="testimonials" class="nav-link">Testimonials</a></li>
                                        <li><a href="why-rv-roof-magic" class="nav-link">Why RV Roof Magic</a></li>
                                        <li><a href="rv-compare" class="nav-link">RV Compare</a></li>
                                        <li><a href="sign-up" class="nav-link">Sign Up</a></li>

                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a href="abc" class="nav-link">Technical Data</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="proper-care" class="nav-link">Proper Care</a></li>
                                        <li><a href="technical-data" class="nav-link">Technical Data</a></li>
                                        
                                    </ul>
                                </li>
                                <li class="nav-item"><a href="blog" class="nav-link">Blog</a></li>
                                <li class="nav-item"><a href="contact-us" class="nav-link">Contact</a></li>
                            </ul>
                        </div>
                        <div class="menu-right">
                            <input type="text" class="menu_icon search-input" id="searchbar" placeholder="Search">

                            <a class="circle-icon add-to-cart" href="">
                                <img src="./images/shopping-basket.svg" alt="shopping-basket-icon" />
                            </a>
                            <a class="circle-icon user-profile" href="">
                                <img src="./images/user-icon.svg" alt="user-icon" />
                            </a>
                        </div>
                    </div>
                </nav>
                <div class="header-bar">
                    <p class="text-white">
                        <span class="icon">
                            <img src="./images/shipping-icon.svg" alt="shipping-icon" />
                        </span>
                        Free Shipping Over $250
                    </p>
                    <p class="text-white">
                        <span class="icon">
                            <img src="./images/money.svg" alt="money-icon" />
                        </span>
                        50% Off Shipping on All Orders
                    </p>
                    <p class="text-white">
                        <span class="icon">
                            <img src="./images/globe.svg" alt="globe-icon" />
                        </span>
                        Website Orders Only
                    </p>
                    <p class="text-white">
                        <span class="icon">
                            <img src="./images/champion.svg" alt="champion-icon" />
                        </span>
                        30+ Years of Proven Success
                    </p>
                    <p class="text-white">
                        <span class="icon">
                            <img src="./images/tools.svg" alt="tools-icon" />
                        </span>
                        Fix Roof Leaks, Only Once!
                    </p>
                </div>
            </header>
        `;
        // Menu toggle jquery
        $(document).ready(function () {
            const $menuToggle = $(".menu-toggle");
            const $nav = $(".menu-wrapper");
            const $dropdownLinks = $(".nav-item.dropdown > a");

            // Toggle mobile menu
            $menuToggle.on("click", function () {
                $nav.toggleClass("open");
                $menuToggle.toggleClass("show");
            });

            // Dropdown
            $dropdownLinks.on("click", function (e) {
                e.preventDefault();
                e.stopPropagation();

                const $parentDropdown = $(this).parent();
                const $dropdownMenu = $parentDropdown.find(".dropdown-menu");

                // Toggle current dropdown
                if ($dropdownMenu.is(":visible")) {
                    // If open → close it
                    $dropdownMenu.slideUp(260);
                    $parentDropdown.removeClass("view-dropdown");
                } else {
                    // Close other dropdowns first
                    $(".dropdown")
                        .find(".dropdown-menu")
                        .slideUp(260)
                        .parent()
                        .removeClass("view-dropdown");

                    // Open current dropdown
                    $dropdownMenu.slideDown(260);
                    $parentDropdown.addClass("view-dropdown");
                }
            });
            // Close dropdowns when clicking outside
            $(document).on("click", function () {
                $(".dropdown-menu").slideUp(260);
                $(".dropdown").removeClass("view-dropdown");
            });
        });
        // Add the jQuery slideToggle in Menu
        $(document).ready(function () {
            $("#MenuToggle").click(function () {
                var target = $(this).parent().children("#NavMenu");
                $(target).slideToggle();
            });
        });

        // Highlight the active menu item based on the current page URL//
        document.addEventListener("DOMContentLoaded", function () {
            const nav = this.querySelector("#NavMenu");
            if (!nav) return;

            const links = nav.querySelectorAll("a");
            const currentPath = window.location.pathname;

            links.forEach(link => {
                const href = link.getAttribute("href");

                // Skip anchor links
                if (!href || href === "#" || href.startsWith("#")) return;

                const linkUrl = new URL(link.href, window.location.origin);
                const linkPath = linkUrl.pathname;

                if (linkPath === currentPath) {
                    link.classList.add("isactive");

                    // Highlight dropdown parent
                    const dropdownParent = link.closest(".nav-item.dropdown");
                    if (dropdownParent) {
                        const parentLink = dropdownParent.querySelector(".nav-link");
                        if (parentLink) parentLink.classList.add("isactive");
                    }
                }
            });
        });

    }
}

customElements.define("header-component", Header);
