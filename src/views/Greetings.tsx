import {FC} from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './Greetings.scss';
interface props {
    language:boolean
}
const Greetings: FC<props> = (props) => {
    const moveDown = () => {
        const height:number = document.getElementById('about-me')!.offsetTop;
        window.scrollTo({
            left:0,
            top:height,
            behavior: 'smooth'
        });
    }
    return (
        <div>
            <div className="greetings__tilt">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="greetings__shape-fill"></path>
                </svg>
            </div>
            <section className="greetings" id="greetings">
                <h1 className="greetings__header">
                    {props.language ? 'Hello, ':'Cześć, '}
                    <span>{props.language ? "I'm Jakub" : "jestem Jakub"}
                        <div className='upper'></div>
                    </span>
                </h1>

                <h2>{props.language? "I'm aspiring programmer intrested in low level programming and web applications." : "Jestem początkującym programistą zainteresowanym niskopoziomowym programowaniem"}</h2>
                <button className="greetings__button" onClick={moveDown}><KeyboardArrowDownIcon/></button>
            </section>
            <div className="greetings__triangle">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="greetings__shape-fill"></path>
                </svg>
            </div>
        </div>
    );
}
export default Greetings;