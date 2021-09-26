import { FC } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import PlFlag from 'assets/pl-flag.svg';
import GbFlag from 'assets/gb-flag.svg';

import './Bothnav.scss';
interface props {
    language: boolean,
    icon: boolean,
    moveTo:Function,
    darkmode:Function,
    handleLang:Function,
};
const MobileNav: FC<props> = (props) => {
    const openSidebar = async () => {
        document.getElementById("m-nav__sidenav")!.style.width = '300px';
    }
    const closeSidebar = async () => {
        document.getElementById("m-nav__sidenav")!.style.width = '0';
    }
    const darkmode = () => {
        props.darkmode();
    }
    const handleLang = () => {
        props.handleLang();
    }
    return (
        <nav className="m-nav">
            <div>
                <Button onClick={openSidebar} style={{ backgroundColor: "#21b6ae", }} variant="contained"><MenuIcon /></Button>
            </div>
            <div id="m-nav__sidenav" className="m-nav__sidenav">
                <Button onClick={closeSidebar}>
                    <CloseIcon style={{ fontSize: "3em" }} />
                </Button>
                <Button
                    className='m-nav__button'
                    onClick={e => {props.moveTo(e); closeSidebar();}}
                    name='about-me'
                    variant="contained"
                    color="primary">
                    {props.language ? 'About me' : 'O mnie'}
                </Button>
                <Button
                    className='m-nav__button'
                    onClick={e => {props.moveTo(e); closeSidebar();}}
                    name='skills'
                    variant="contained"
                    color="primary">
                    {props.language ? 'Skills' : 'Umiejętności'}
                </Button>
                <Button
                    className='m-nav__button'
                    onClick={e => {props.moveTo(e); closeSidebar();}}
                    name='my-projects'
                    variant="contained"
                    color="primary">
                    {props.language ? 'My projects' : 'Moje projekty'}
                </Button>
                <Button
                    className='m-nav__button'
                    onClick={e => {props.moveTo(e); closeSidebar();}}
                    name='contact'
                    color="primary"
                    variant="contained">
                    {props.language ? 'Contact' : 'Kontakt'}
                </Button>
                <div className='m-nav__button'>
                    <Button onClick={darkmode} color="primary">
                            {props.icon ? <Brightness7Icon /> : <Brightness4Icon/> }
                    </Button>
                    <Button color="primary" onClick={handleLang}>
                            <img src={props.language ? GbFlag : PlFlag } alt="flag" />
                    </Button>
                </div>
            </div>
        </nav>
    );
};
export default MobileNav;
