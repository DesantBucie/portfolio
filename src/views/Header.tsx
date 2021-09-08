import './Header.scss';
import logo from '../assets/logo2.svg';
import Grid from '@material-ui/core/Grid';
import { FC, useEffect, useState } from 'react';

import MobileNav from '../components/nav/MobileNav';
import WideNav from '../components/nav/WideNav';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

interface props {
    language:boolean,
    handleLang:Function,
}
const Header:FC<props> = (props) => {

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [icon, setIcon] = useState<boolean>(document.body.classList.contains("darkmode"));

    const handleLang = () => {
        props.handleLang();
    }
    const darkmode = () => {
        document.body.classList.toggle('darkmode');
        if (document.body.classList.contains('darkmode')) {
            setIcon(true);
        }
        else {
            setIcon(false);
        }
    }
    const checkIfUserPrefersDarkmode = () => {
        const userPrefersDarkmode:Boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(userPrefersDarkmode) darkmode();
    }
    
    /*useEffect(() => {
        checkIfUserPrefersDarkmode();
         // eslint-disable-next-line
    },[]);*/

    const moveTo = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        document.getElementById(event.currentTarget.name)!.scrollIntoView({behavior:"smooth"});
    }
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);
    if (width > 1023) {
        return (
            <header className="header">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <WideNav moveTo={moveTo} language={props.language}/>
                    <div className="header__darkmode">
                        <Button onClick={darkmode} color="primary">
                            {icon ? <Brightness7Icon /> : <Brightness4Icon/> }
                        </Button>
                        <Button color="primary" className="header__button--lang" onClick={handleLang}>
                            {props.language ? '🇬🇧' : '🇵🇱'}
                        </Button>
                    </div>
            </header>
        );
    }
    else {
        return (
            <header className="header">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <Button onClick={darkmode} color="primary">
                            {icon ? <Brightness7Icon /> : <Brightness4Icon/> }
                        </Button>
                    </div>
                    <MobileNav moveTo={moveTo} language={props.language}/>
            </header>
        );
    }
}
export default Header;