class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer class="pattern">
                <div class="sec-padding pb-0">
                    <div class="container-fluid">
                        <div class="footer-container d-grid">
                            <div class="footer-heading">
                                <a class="navbar-brand" href="">
                                    <img src="./images/rv-roof-magic-logo.svg" alt="rv-roof-magic" />
                                </a>
                                <p class="m-0 footer_text">With over a 25-year history of success, RvRoofMagic has helped
                                    thousands of
                                    customers
                                    get a new
                                    roof for a fraction of the cost of traditional roof replacement. RvRoofMagic is specifically
                                    formulated for RV’s, trailers, and mobile homes. An RV coating that has proven to outperform
                                    acrylics and elastomerics as well. It’s guaranteed to protect your roof from UV and ozone
                                    deterioration as well as temperature swings throughout the years. It will withstand ponding
                                    water 365 days a year! Its unique chemical drying process has made it the choice for
                                    thousands
                                    over the years! Chemistry not seen in any other RV roof coating!</p>
                                <p class="m-0 footer_text">RvRoofMagic is specifically formulated for RV’s, trailers, and mobile
                                    homes. With
                                    over a 25-year
                                    history of success it has been the choice of thousands of customers over the years. A
                                    coating
                                    that has proved to hold up to the demands of a traveling vehicle as well as temperature
                                    swings
                                    throughout the year. Its unique chemical and application characteristics have made it the
                                    choice
                                    for our customers.</p>
                            </div>
                            <div class="footer-item-wrapper">
                                <div class="footer-item">
                                    <h4 class="m-0">Company</h4>
                                    <ul class="footer-links">
                                        <li>
                                            <a href="" class="footer_text">Why US</a>
                                        </li>
                                        <li>
                                            <a href="" class="footer_text">Shop Now</a>
                                        </li>
                                        <li>
                                            <a href="" class="footer_text">How to Apply</a>
                                        </li>
                                        <li>
                                            <a href="" class="footer_text">Blog</a>
                                        </li>
                                        <li>
                                            <a href="" class="footer_text">Calculate Estimate</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer-item">
                                    <h4 class="m-0">RV Roof Magic</h4>
                                    <ul class="footer-links">
                                        <li>
                                            <a href="" class="footer_text">Flash Coat</a>
                                        </li>
                                        <li>
                                            <a href="" class="footer_text">RV Roof vs Others</a>
                                        </li>
                                        <li>
                                            <a href="" class="footer_text">Testimonial Analysis</a>
                                        </li>
                                        <li>
                                            <a href="" class="footer_text">Adhesion Test</a>
                                        </li>
                                        <li>
                                            <a href="" class="footer_text">Technical Data Sheet</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer-item">
                                    <h4 class="m-0">Useful Links</h4>
                                    <ul class="footer-links">
                                        <li>
                                            <a href="" class="footer_text">Gallery</a>
                                        </li>
                                        <li>
                                            <a href="" class="footer_text">Testimonial</a>
                                        </li>
                                        <li>
                                            <a href="" class="footer_text">FAQs</a>
                                        </li>
                                        <li>
                                            <a href="" class="footer_text">Blog</a>
                                        </li>
                                        <li>
                                            <a href="" class="footer_text">Become a Partner</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="contact-details d-grid">
                            <div class="contact-item px-2">
                                <h4 class="m-0 pb-20">Address</h4>
                                <address class="footer_text">494 Bridgeport Ave Suite 101-342 Shelton, CT 06484</address>
                            </div>
                            <div class="contact-item px-2">
                                <h4 class="m-0 pb-20">Address</h4>
                                <address class="footer_text">494 Bridgeport Ave Suite 101-342 Shelton, CT 06484</address>
                            </div>
                            <div class="contact-item">
                                <h4 class="m-0 pb-20">Phone No.</h4>
                                <a class="footer_text" href="tel: +1 855-281-0907">+1 855-281-0907</a>
                            </div>
                            <div class="contact-item">
                                <h4 class="m-0 pb-20">Email Address</h4>
                                <a class="footer_text" href="mailto: info@rvroofmagic.com">info@rvroofmagic.com</a>
                            </div>
                            <div class="contact-item timing">
                                <h4 class="m-0 pb-20">Hours of Operations</h4>
                                <span class="footer_text">Mon – Fri: 8:00 AM – 7:00 PM EST </span>
                                <span class="footer_text">Sat: 9:00 AM – 5:00 PM EST</span>
                                <span class="footer_text">Sun: 11:00 AM – 3:00 PM EST</span>
                            </div>
                        </div>
                        <div class="social-wrapper">
                            <div class="flex-left">
                                <img src="./images/metal-of-honor.svg" alt="metal-of-honor">
                                <img src="./images/mistory-of-success.svg" alt="mistory-of-success">
                                <img src="./images/warranty.svg" alt="warranty">
                                <img src="./images/paypal.svg" alt="paypal">
                                <img src="./images/authorize-net.svg" alt="authorize-net">
                            </div>
                            <div class="flex-right">
                                <a class="circle-icon" href="">
                                    <img src="./images/twitter.svg" alt="twitter">
                                </a>
                                <a class="circle-icon" href="">
                                    <img src="./images/facebook.svg" alt="facebook">
                                </a>
                                <a class="circle-icon" href="">
                                    <img src="./images/youtube.svg" alt="youtube">
                                </a>
                                <a class="circle-icon" href="">
                                    <img src="./images/pinterest.svg" alt="pinterest">
                                </a>

                            </div>
                        </div>
                        <div class="copyright">
                            <p class="m-0 footer_text text-center">Copyright © <span id="currentyear"></span> RV Roof Magic
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        `;

    }
}

customElements.define("footer-component", Footer);
