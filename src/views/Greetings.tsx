import {FC} from 'react';
import RoundButton from '../components/buttons/RoundButton';
import './Greetings.scss';
interface props {
    language:boolean
}
const Greetings: FC<props> = (props) => {
    const moveTo = () => {
        document.getElementById('about-me')!.scrollIntoView({behavior:"smooth"});
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

                <div onClick={moveTo}><RoundButton whichArrow={'down'}/></div>
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