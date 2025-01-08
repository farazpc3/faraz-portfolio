function EducationButton() {
  return(
    <a href="#education">
    <figure>
      <picture>
        <source
          src="./faraz-portfolio/src/assets/images/icons/education.png"
          media="(min-width: 768px)"
          type="image/jpeg"
          title="education"
          width="35rem"
        />
        <img
          src="https://www.flaticon.com/free-icons/academic"
          alt="FN Monogram Education"
          title="education"
          width="35rem"
          loading="lazy"
        />
      </picture>
      <figcaption>education</figcaption>
    </figure>
  </a>
  );
}
export default EducationButton;