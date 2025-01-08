function Logo() {
    return(
      <picture>
        <source
          src="./faraz-portfolio/src/assets/images/logo/logo.jpg"
          media="(min-width: 1200px)"
          type="image/jpeg"
          title="logo"
          width="35rem"
        />
        <source
          src="./faraz-portfolio/src/assets/images/logo/logotablet.jpg"
          media="(min-width: 768px)"
          type="image/jpeg"
          title="logo"
          width="35rem"
        />
        <img
          src="./faraz-portfolio/src/assets/images/logo/logomobile.jpg"
          alt="FN Monogram Logo"
          title="logo"
          width="35rem"
          loading="lazy"
        />
      </picture>
    );
}
export default Logo;