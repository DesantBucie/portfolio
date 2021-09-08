import { FC, useState } from 'react';

import { SliderContent } from '../components/slider/SliderContent';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import './MyProjects.scss';
interface props {
    language: boolean
}
const MyProjects: FC<props> = (props) => {

    const [current, setCurrent] = useState<number>(0);

    const setNext = () => {
        current === SliderContent.length - 1 ? setCurrent(0) : setCurrent(current + 1);
    }
    const setPrev = () => {
        current === 0 ? setCurrent(SliderContent.length - 1) : setCurrent(current - 1);
    }
    return (
        <div>
            <section className="my-projects" id="my-projects">
                <h2>{props.language ? 'My projects' : 'Moje projekty'}</h2>
                <FaArrowAltCircleLeft onClick={setPrev} />
                <FaArrowAltCircleRight onClick={setNext} />
                {SliderContent.map((slide, index) => {
                    if (current === slide.id) {
                        return (
                            <div className="my-projects__project">
                                <h3>{slide.header}</h3>
                                <p>{slide.text}</p>
                                <div className="my-projects__image"><img src={slide.image} alt="slider_img" /></div>
                            </div>
                        );
                    }
                })}
            </section>
        </div>
    );
}
export default MyProjects;