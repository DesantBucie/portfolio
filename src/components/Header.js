import './Header.scss';
import logo from '../logo.svg';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';

import MobileNav from './nav/MobileNav';
import WideNav from './nav/WideNav';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [icon, setIcon] = useState(document.body.classList.contains("darkmode"));
    
    const Darkmode = () => {
        document.body.classList.toggle('darkmode');
        if (document.body.classList.contains('darkmode')) {
            setIcon(true);
        }
        else {
            setIcon(false);
        }
    }
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    if (width > 750) {
        return (
            <header className="header">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <Button onClick={Darkmode} color="primary">
                            {icon ? <Brightness7Icon /> : <Brightness4Icon/> }
                        </Button>
                    </div>
                    <WideNav />
                </Grid>
            </header>
        );
    }
    else {
        return (
            <header className="header">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <Button onClick={Darkmode} color="primary">
                            {icon ? <Brightness7Icon /> : <Brightness4Icon/> }
                        </Button>
                    </div>
                    <MobileNav />
                </Grid>
            </header>
        );
    }
}
export default Header;