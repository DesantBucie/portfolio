import { FC, useEffect, useState } from 'react';
import RoundButton  from '../../components/buttons/RoundButton';
import './GoUpButton.scss';

const GoUpButton:FC = () => {
    const [scrollHeight, setScrollHeight] = useState<number>(window.scrollY);
    const moveUp = () => {
        window.scrollTo({
            left:0,
            top:0,
            behavior:"smooth",
        });
    };
    useEffect(() => {
        const handleScroll = async () => {
            setScrollHeight(window.scrollY);
            const button = document.getElementById('goup-button')!;
            if(scrollHeight <  800 ) { 
                button.style.right="-100px" 
                await setTimeout(() => null, 200);
                button.style.display = 'block';
            }
            else {
                button.style.right="20px";
            }
        }
        document.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[scrollHeight]);
    return (
        <div id="goup-button" className="goup-button" onClick={moveUp}><RoundButton whichArrow={'up'}/></div>
    );
};
export default GoUpButton;