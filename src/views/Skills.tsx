import { FC, PropsWithChildren } from 'react';

import html from 'assets/html5.svg';
import css from 'assets/css3.svg';
import sass from 'assets/sass.svg';
import js from 'assets/javascript.svg';
import ts from 'assets/typescript.svg';
import figma from 'assets/figma.svg';
import react from 'assets/react.svg';
import git from 'assets/git.svg';

import './Skills.scss';

interface props {
    readonly language: boolean
};
interface tiles {
    title:string,
    img:string,
}
const Skills_list:ReadonlyArray<string> = ["HTML5", "CSS3", "React", "Javascript", "Typescript", "Figma", "Scss", "Git"];
const Skills_images:ReadonlyArray<string> = [html, css, react, js, ts, figma, sass, git];
const Tiles: ReadonlyArray<tiles> = Skills_list.map((x:string, i:number) => {
    return {
        title: x,
        img: Skills_images[i]
    }
});
const Skills: FC<props> = (props: PropsWithChildren<props>) => {
    return (
        <section id="skills" className="skills">
            {props.language ?
                <h2 className="skills--english">Skills</h2>
                :
                <h2 className="skills--polish">Technologie</h2>
            }
            <div className="skills__container">
            { Tiles.map((Tile:tiles) =>
                <div className="skills__tile">
                    <img src={Tile.img} alt="html" />
                    <h3>{Tile.title}</h3>
                </div>
            )}
            </div>
        </section>
    );
};
export default Skills;
