import './Contact.scss';

const Contact: React.FC = () => {
    return (
        <div>
            <div className="contact__triangle">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="contact__shape-fill"></path>
                </svg>
            </div>
            <section className="contact" id="contact">
                <div className="my-projects__project my-projects__project--contact">
                    <h2>Contact</h2>
                    <section className="contact__container">
                        <h3>Mail Me! <a href="mailto: mattrusz@gmail.com">mattrusz@gmail.com</a></h3>
                        <h3>Or <a href="https://github.com/DesantBucie/DesantBucie/issues">Make an issue</a> in my github repo</h3>
                    </section>
                </div>

            </section>
            <div className="contact__triangle contact__triangle--bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="contact__shape-fill"></path>
                </svg>
            </div>
        </div>
    );
}
export default Contact;