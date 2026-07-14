function Contact() {

  return (

    <section className="contact-page">

      <div className="contact-container">

        <div className="contact-info">

          <span className="contact-tag">
            Contact Us
          </span>

          <h1>
            Book Your Next Luxury Hairstyle
          </h1>

          <p>
            Ready for your next transformation?
            Contact us today and let us give you
            the perfect luxury look.
          </p>

          <div className="contact-details">

            <div className="contact-card">

              <h3>Phone Number</h3>

              <p>079 123 8364</p>

            </div>


            <div className="contact-card">

              <h3>Business Hours</h3>

              <p>Mon - Sat : 08:00 - 18:00</p>

            </div>


            <div className="contact-card">

              <h3>Location</h3>

              <p>South Africa</p>

            </div>

          </div>


          <a
            href="https://wa.me/27792461252"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              Chat on WhatsApp
            </button>
          </a>

        </div>


        <div className="contact-form-container">

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Desired Hairstyle"
            />

            <textarea
              rows="6"
              placeholder="Tell us more..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>

  );
}

export default Contact;