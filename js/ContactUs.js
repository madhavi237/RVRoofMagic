class ContactUs extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <section class="contact-us bg-blue">
                <div class="sec-padding overflow-hidden">
                    <div class="container-fluid">
                        <div class="d-grid">
                            <div class="section-content">
                                <div class="section-title">
                                    <h2 class="m-0">Have Questions? Contact Us</h2>
                                    <p class="">We would love to hear from you! If you have any questions, comments, or just
                                        want to
                                        say
                                        hello, please don’t hesitate to fill out our contact form. We strive to respond to all
                                        inquiries as soon as possible, and we’re always happy to help in any way we can. Your
                                        feedback is important to us, and we look forward to hearing from you soon.</p>
                                </div>
                                <form action="" class="contact-form">
                                    <div class="form-grid d-grid">
                                        <div class="form-group">
                                            <input type="text" class="form-field" placeholder="First Name" name="firstname"
                                                required="">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-field" placeholder="Last Name" name="lastname"
                                                required="">
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-field" placeholder="Email Address" name="email"
                                                required="">
                                        </div>
                                        <div class="form-group">
                                            <input type="tel" class="form-field" placeholder="Phone Number" name="phone"
                                                required="">
                                        </div>
                                        <textarea name="message" placeholder="Type your message..." rows="5"
                                            required=""></textarea>
                                    </div>
                                    <a href="#" class="primary-btn">Submit</a>

                                </form>
                            </div>

                            <div class="contact-img b-radius-40 text-center">
                                <img src="./images/c-product-img.webp" alt="product-image" class="">
                                <a href="#" class="primary-btn bg-blue">Explore More Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define("contact-us", ContactUs);
