import galleryData from "../data/galleryData";

function Gallery() {

  return (

    <section className="page">

      <h1>Gallery</h1>

      <p>
        Explore our latest hairstyles and transformations.
      </p>

      <div className="gallery-grid">

        {galleryData.map((item, index) => (

          <div className="gallery-card" key={index}>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-info">

              <h3>{item.title}</h3>

              <p>{item.price}</p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Gallery;