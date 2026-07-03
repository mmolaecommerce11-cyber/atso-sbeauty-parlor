import heroImage from "../assets/service1.jpg";

function Home() {

  const featuredServices = [
    {
      title: "Knotless Braids",
      description: "Elegant and lightweight luxury braids."
    },

    {
      title: "Luxury Ponytails",
      description: "Stylish ponytails for every occasion."
    },

    {
      title: "Frontal Installs",
      description: "Professional flawless installations."
    }
  ];

  return (

    <>
    
      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-text">

            <span className="hero-tag">
              Luxury Beauty Salon
            </span>

            <h1>
              Elegant Hairstyles That Make You Stand Out
            </h1>

            <p>
              Experience premium hair styling, modern beauty
              transformations and confidence like never before.
            </p>

            <div className="hero-buttons">

              <a
                href="https://wa.me/27791238364"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  Book Appointment
                </button>
              </a>

            </div>

          </div>


          <div className="hero-image">

            <img
              src={heroImage}
              alt="Luxury Hairstyle"
            />

          </div>

        </div>

      </section>


      {/* STATS SECTION */}

      <section className="stats-section">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card">
          <h2>4+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Luxury Styles</p>
        </div>

      </section>


      {/* FEATURED SERVICES */}

      <section className="home-services">

        <h2>Featured Services</h2>

        <div className="home-services-grid">

          {featuredServices.map((service, index) => (

            <div className="mini-service-card" key={index}>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="cta-section">

        <h2>
          Ready For Your Next Look?
        </h2>

        <p>
          Book your appointment today and experience
          luxury beauty services.
        </p>

        <a
          href="https://wa.me/27791238364"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            Contact Us
          </button>
        </a>

      </section>

    </>

  );
}

export default Home;