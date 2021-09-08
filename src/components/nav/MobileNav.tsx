import { FC } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

import './Bothnav.scss';
interface props {
    language: boolean,
    moveTo:Function,
};
const MobileNav: FC<props> = (props) => {
    const openSidebar = async () => {
        document.getElementById("m-nav__sidenav")!.style.width = '300px';
    }
    const closeSidebar = async () => {
        document.getElementById("m-nav__sidenav")!.style.width = '0';
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
            </div>
        </nav>
    );
};
export default MobileNav;