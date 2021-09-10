import { FC, useState } from 'react';

import { settings, SliderContent } from '../components/slider/SliderContent';
import { FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa';

import Slider from "react-slick";

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
                {(()=> {
                    if(props.language) {
                        return (<h2 className="my-projects--english">My projects</h2>)
                    }
                    else {
                        return(<h2 className="my-projects--polish">Moje projekty</h2>)
                    }
                })()}
                <Slider {...settings}>
                {SliderContent.map((slider) => (
                  <div key={slider.id}>
                    <img src={slider.image} alt='slider image' />
                  </div>
                ))}
                </Slider>
            </section>
        </div>
    );
}
export default MyProjects;
