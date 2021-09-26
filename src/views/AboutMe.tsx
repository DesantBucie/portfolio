import { FC } from 'react';
import './AboutMe.scss';

interface props {
    language: boolean
}

const AboutMe: FC<props> = (props) => {
    return (
        <section id="about-me" className="about-me">
            <div className="about-me__header">
                <h2>
                    {props.language ?
                        <>
                            <span className="about-me__upper">About</span>
                            <span className="about-me__lower">Me</span>
                        </>
                        :
                        <span className="about-me__lower--polish">O Mnie</span>
                    }
                </h2>
            </div>
            <div className="about-me__content">
                <p>{props.language ? 'I am Jakub Truszkowski. I am a IT stundent in Częstochowa University of Technology. I like to discover new operating systems, usually those not known widely. I develop my skills in Front-end(JS,TS) and C. I want to learn backend node.js soon. I am interested also in Space, or rather what Man uses to get there. I hope that someday Polish rocket will take-off as well.' : 'Nazywam się Jakub Truszkowski. Jestem studentem informatyki na Politechnice Częstochowskiej. Lubię poznawać nowe systemy operacyjne, zazwyczaj te mniej znane. Rozwijam swoje umiejętności we front-endzie(JS,TS) i C. Mam w planach naukę backendu w node.js. Interesuję się też kosmosem, a raczej jak towary czy ludzie się do niego dostają. Mam nadzieję, że i kiedyś polska rakieta wzbije się w powietrze :).'} </p>
            </div>
        </section>
    );
}
export default AboutMe;
