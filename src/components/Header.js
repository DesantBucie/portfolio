import logo from '../../src/logo.svg';

import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import "./Header.scss";
import React from 'react';

const Header = (props) => {
    
    const [width, setWidth] = React.useState(undefined);
    React.useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []); 
    
    const Darkmode = () => {
        document.body.classList.toggle('darkmode');
    }
    const OpenSidebar = () => {

    }
    const CloseSidebar = () => {

    }
    if (width > 750) {
        return (
            <div className="header">
                    <section className="header__logo"><img src={logo} alt="logo"/></section>
                    <div><Button onClick={Darkmode} color="primary"><Brightness4Icon/></Button></div>
                    <div><a href="#about-me"><Button variant="contained" color="primary">About me</Button></a></div>
                    <div><a href="#my-projects"><Button variant="contained" color="primary">My projects</Button></a></div>
                    <div><a href="#contact"><Button style={{backgroundColor: "#21b6ae",}}variant="contained">Contact</Button></a></div>
            </div>
        );
    }
    else {
        return (
            <div className="header">
                <section className="header__logo"><img src={logo} alt="logo"/></section>
                <div><Button onClick={Darkmode} color="primary"><Brightness4Icon/></Button></div>
                <div><Button onClick={OpenSidebar}style={{backgroundColor: "#21b6ae",}} variant="contained"><MenuIcon/></Button></div>
                <div className="header__sidenav">
                    <a><CloseIcon onClick={CloseSidebar}/></a>
                    <a href="#about-me"><Button variant="contained" color="primary">About me</Button></a>
                    <a href="#my-projects"><Button variant="contained" color="primary">My projects</Button></a>
                    <a href="#contact"><Button color="primary" variant="contained">Contact</Button></a>
                </div>
            </div>
        );
    }
}
export default Header;