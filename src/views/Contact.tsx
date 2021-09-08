import { FC } from 'react';

import './Contact.scss';

interface props {
    language:boolean
}
const Contact:FC<props> = (props) => {
    return (
           
            <section className="contact" id="contact">
                <div className="my-projects__project my-projects__project--contact">
                    <h2>{props.language ? 'Contact' : 'Kontakt'}</h2>
                    <section className="contact__container">
                        <h3>Mail Me! <a href="mailto: mattrusz@gmail.com">mattrusz@gmail.com</a></h3>
                        <h3>Or <a href="https://github.com/DesantBucie/DesantBucie/issues">Make an issue</a> in my github repo</h3>
                    </section>
                </div>
            </section>
    );
}
export default Contact;