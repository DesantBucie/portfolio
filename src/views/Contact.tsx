import { FC } from 'react';

import './Contact.scss';

interface props {
    language:boolean
}
const Contact:FC<props> = (props) => {
    return (
           
            <section className="contact" id="contact">
                    <h2>{props.language ? 'Contact' : 'Kontakt'}</h2>
                    <section className="contact__container">
                        <h3>Mail: <a href="mailto: mattrusz@gmail.com">mattrusz@gmail.com</a></h3>
                        <h3>Or <a href="https://github.com/DesantBucie/DesantBucie/issues">Make an issue</a> in my github repo</h3>
                    </section>
            </section>
    );
}
export default Contact;