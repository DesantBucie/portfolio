import { FC } from 'react';
import { SvgTilt } from 'components/svg_tilt/SvgTilt';
import RoundButton from 'components/buttons/RoundButton';
import './Greetings.scss';
interface props {
    language: boolean
}
const Greetings: FC<props> = (props) => {
    const moveTo = () => {
        document.getElementById('about-me')!.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div>
            <SvgTilt svg={'--rotationY'}/>
            <section className="greetings" id="greetings">
                <h1 className="greetings__header">
                    {props.language ? 'Hello, ' : 'Cześć, '}
                    <span>{props.language ? "I'm Jakub" : "jestem Jakub"}
                        <div className='upper'></div>
                    </span>
                </h1>

                <div className="greetings__button" onClick={moveTo}><RoundButton whichArrow={'down'} /></div>
                <SvgTilt svg={'--rotationX'}/>
            </section>
        </div>
    );
}
export default Greetings;
