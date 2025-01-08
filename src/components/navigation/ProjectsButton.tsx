function Projects() {
  return(
      <a href="#projects">
      <figure>
      <picture>
          <source
          src="./faraz-portfolio/src/assets/images/logo/logotablet.jpg"
          media="(min-width: 768px)"
          type="image/jpeg"
          title="logo⚛️"
          width="35rem"
          />
          <img
          src="./faraz-portfolio/src/assets/images/logo/logomobile.jpg"
          alt="FN Monogram Logo⚛️"
          title="logo⚛️"
          width="35rem"
          loading="lazy"
          />
      </picture>
      <figcaption>Projects</figcaption>
      </figure>
  </a>
  );
}
export default Projects;