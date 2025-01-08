function AboutMeButton() {
    return(
        <a href="#aboutme">
            <figure>
            <picture>
                <source
                src="./faraz-portfolio/src/assets/images/icons/info.png"
                media="(min-width: 768px)"
                type="image/jpeg"
                title="About Me"
                width="35rem"
                />
                <img
                src="https://www.flaticon.com/free-icons/info"
                alt="About Me"
                title="About Me"
                width="35rem"
                loading="lazy"
                />
            </picture>
            <figcaption>About Me</figcaption>
            </figure>
        </a>
    );
}
export default AboutMeButton;