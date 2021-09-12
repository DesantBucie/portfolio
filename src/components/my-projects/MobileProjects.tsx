import Slider from 'react-slick';
import { settings } from '../slider/SliderContent';
import { SliderContent } from '../slider/SliderContent';
import {FaGithub} from 'react-icons/fa';

import './MobileProjects.scss';

export const MobileProjects = () => {
    return (
        <div className="m-projects">
            <Slider {...settings}>
                {SliderContent.map((slider) => (
                    <div className="m-projects__slide" key={slider.id} style={{backgroundImage:slider.image, width:'100%'}}>
                        <img style={{ margin: 'auto', opacity:0.6 }} src={slider.image} alt={slider.header} />
                        <div className='m-projects__content'>
                            <a href={slider.github}><h3>{slider.header}</h3><h4><FaGithub/></h4></a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
