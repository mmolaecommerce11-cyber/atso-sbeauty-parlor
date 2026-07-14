import servicesData from "../data/servicesData";

function Services() {

  return (

    <section className="page">

      <h1>Our Services</h1>

      <p>
        Luxury hair services tailored to enhance your beauty
        and confidence.
      </p>

      <div className="services-grid">

        {servicesData.map((service, index) => (

          <div className="service-card" key={index}>

            <img
              src={service.image}
              alt={service.title}
            />

            <div className="service-content">

              <h2>{service.title}</h2>

              <p>{service.price}</p>

              <span>
                {service.description}
              </span>

              <a
                href="https://wa.me/27792461252"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  Book Now
                </button>
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Services;