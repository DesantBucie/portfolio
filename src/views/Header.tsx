import './Header.scss';
import logo from 'assets/logo2.svg';
import { FC, useEffect, useState } from 'react';

import MobileNav from 'components/nav/MobileNav';
import WideNav from 'components/nav/WideNav';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import PlFlag from 'assets/pl-flag.svg';
import GbFlag from 'assets/gb-flag.svg';

interface props {
    language:boolean,
    width:number,
    handleLang:Function,
}
const Header:FC<props> = (props) => {

    const [icon, setIcon] = useState<boolean>(document.body.classList.contains("darkmode"));

    const handleLang = () => {
        props.handleLang();
    }
    const darkmode = () => {
        document.body.classList.toggle('darkmode');
        document.body.classList.contains('darkmode') ? setIcon(true) : setIcon(false);
    }
    const prefferedLanguage = () => {
        const userLang = navigator.language;
        if(userLang === 'pl-PL') handleLang();
    }
    const checkIfUserPrefersDarkmode = () => {
        const userPrefersDarkmode:Boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(userPrefersDarkmode) darkmode();
    }
    
    useEffect(() => {
        checkIfUserPrefersDarkmode();
         // eslint-disable-next-line
    },[]);
    useEffect(() => {
        prefferedLanguage();
         // eslint-disable-next-line
    },[]);

    const moveTo = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        document.getElementById(event.currentTarget.name)!.scrollIntoView({behavior:"smooth"});
    }
    if (props.width > 1023) {
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
                            <img className="header__flag" src={props.language ? GbFlag : PlFlag} alt="flag"/>
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
                    <MobileNav 
                    icon={icon} 
                    moveTo={moveTo} 
                    language={props.language}
                    darkmode={darkmode}
                    handleLang={handleLang}
                    />
            </header>
        );
    }
}
export default Header;
