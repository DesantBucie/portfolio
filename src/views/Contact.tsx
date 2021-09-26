import { FC } from 'react';
import { SvgTilt } from 'components/svg_tilt/SvgTilt';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import './Contact.scss';

interface props {
    language: boolean
}
const Contact: FC<props> = (props) => {
    return (
        <div>
            <SvgTilt/>
            <section className="contact" id="contact">
                <h2>{props.language ? 'Contact' : 'Kontakt'}</h2>
                <section className="contact__container">
                    <p>{props.language ? 'Right now I\'m looking for an intership, or junior job remotely, or near Częstochowa, so I can work after studies. If you have any question about this or other projects, I will try to answer ASAP. Ways of contact are: ' : 'Obecnie szukam stażu lub pracy na stanowisko juniora, zdalnie, lub blisko Częstochowy, więc mogę ją pogodzić ze studiami. Jeżeli masz jakieś pytanie o ten lub inny project, postaram się jak najszybciej odpowiedzieć. Możesz skontaktować się ze mną za pomocą: '}</p>
                </section>
                <h3>
                        <a href="mailto: mattrusz@gmail.com">
                            <FaEnvelope/> mattrusz@gmail.com
                        </a>
                        
                    </h3>
                    <h3><a href="https://github.com/DesantBucie/DesantBucie/issues"> <FaGithub/> {props.language ? 'Make issue' : 'Stwórz \'issue\''}</a></h3>
            </section>
        </div>
    );
}
export default Contact;
