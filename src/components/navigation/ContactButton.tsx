function ContactButton() {
  return(
    <a href="#contact">
      <figure>
        <picture>
          <source
            src="./faraz-portfolio/src/assets/images/logo/contact.png"
            media="(min-width: 768px)"
            type="image/jpeg"
            title="contact me"
            width="35rem"
          />
          <img
            src="https://www.flaticon.com/free-icons/phone"
            alt="Contact me"
            title="contact me"
            width="35rem"
            loading="lazy"
          />
        </picture>
        <figcaption>contact</figcaption>
      </figure>
    </a>
  );
}
export default ContactButton;