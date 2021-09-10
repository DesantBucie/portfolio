import { FC } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import './RoundButton.scss';
interface props {
    whichArrow:string,
};
const RoundButton:FC<props> = (props) => {
    return (
        <div className="round-button">
            {props.whichArrow === 'down' ? <FaAngleDown/> : (props.whichArrow === 'up') ? <FaAngleUp/> : 0}
        </div>
    );
};
export default RoundButton;