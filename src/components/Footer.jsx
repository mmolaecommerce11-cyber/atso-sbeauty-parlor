import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>Atso's Beauty</h2>

          <p>
            Luxury hairstyling, premium beauty services,
            and confidence that speaks before you do.
          </p>

        </div>


        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>

        </div>


        <div className="footer-contact">

          <h3>Contact</h3>

          <p>
            <FaPhoneAlt />
            079 123 8364
          </p>

          <p>
            <FaMapMarkerAlt />
            Moremadi Park
          </p>

        </div>


        <div className="footer-socials">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a
              href="https://wa.me/27791238364"
              target="_blank"
            >
              <FaWhatsapp />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Atso's Beauty. All Rights Reserved.
        </p>

      </div>

    </footer>

  );
}

export default Footer;