import React, { FC } from 'react';
import Button from '@material-ui/core/Button';

import './Bothnav.scss';


interface props {
    language: boolean,
    moveTo:Function,
};

const WideNav: FC<props> = (props) => {

    return (
        <nav className="d-nav">
            <Button
                onClick={e => props.moveTo(e)}
                name="about-me"
                color="primary">
                {props.language ? 'About me' : 'O mnie'}
            </Button>
            <Button
                onClick={e => props.moveTo(e)}
                name="skills"
                color="primary">
                {props.language ? 'Skills' : 'Umiejętności'}
            </Button>
            <Button
                onClick={e => props.moveTo(e)}
                name="my-projects"
                color="primary">
                {props.language ? 'My projects' : 'Moje projekty'}
            </Button>
            <Button
                onClick={e => props.moveTo(e)}
                name="contact"
                style={{ color: "#21b6ae", }}
            >
                {props.language ? 'Contact' : 'Kontakt'}
            </Button>
        </nav>
    );
};
export default WideNav;