const photos = [
  {
    src: "/basketball.jpg",
    title: "Basketball for Life",
    category: "Inspiration & Passion",
  },
  {
    src: "/surfing.jpg",
    title: "Chasing Waves",
    category: "Surfing",
  },
  {
    src: "/training.jpg",
    title: "Training Hard",
    category: "Experience & Growth",
  },
  {
    src: "/playing.jpg",
    title: "Game Time",
    category: "Basketball",
  },
];

export default function Gallery() {
  return (
    <main className="gallery-page">
      <section className="gallery-heading">
        <p className="gallery-label">MY LIFE IN FRAMES</p>
        <h1>My Gallery</h1>
        <p>
          A collection of moments, memories, and
          experiences that inspire me.
        </p>
      </section>

      <section className="gallery-grid">
        {photos.map((photo, index) => (
          <article className="gallery-card" key={photo.src}>
            <div className="gallery-image">
              <img
                src={photo.src}
                alt={photo.title}
              />
              <span className="photo-number">
                0{index + 1}
              </span>
            </div>

            <div className="gallery-info">
              <div>
                <h2>{photo.title}</h2>
                <p>{photo.category}</p>
              </div>
              <span className="gallery-arrow">↗</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}