import { FC } from 'react';

import html from '../assets/html5.svg';
import css from '../assets/css3.svg';
import sass from '../assets/sass.svg';
import js from '../assets/javascript.svg';
import ts from '../assets/typescript.svg';
import figma from '../assets/figma.svg';
import react from '../assets/react.svg';
import git from '../assets/git.svg';

import './Skills.scss';

interface props {
    language: boolean
};
const Skills: FC<props> = (props) => {
    return (
        <section id="skills" className="skills">
            {props.language ?
                <h2 className="skills--english">Skills</h2>
                :
                <h2 className="skills--polish">Technologie</h2>
            }
            <div className="skills__container">
                <div className="skills__tile">
                    <img src={html} alt="html" />
                    <h3>HTML5</h3>
                </div>
                <div className="skills__tile">
                    <img src={css} alt='css' />
                    <h3>CSS3</h3>
                </div>
                <div className="skills__tile">
                    <img src={react} alt='react' />
                    <h3>React</h3>
                </div>
                <div className="skills__tile">
                    <img src={js} alt='javascript' />
                    <h3>Javascript</h3>
                </div>
                <div className="skills__tile">
                    <img src={ts} alt='typescript' />
                    <h3>Typescript</h3>
                </div>
                <div className="skills__tile">
                    <img src={figma} alt='figma' />
                    <h3>Figma</h3>
                </div>
                <div className="skills__tile">
                    <img src={sass} alt='sass' />
                    <h3>Sass/Scss</h3>
                </div>
                <div className="skills__tile">
                    <img src={git} alt='git' />
                    <h3>Git</h3>
                </div>
            </div>
        </section>
    );
};
export default Skills;