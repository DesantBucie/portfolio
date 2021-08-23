import "./Header.scss";
import React, { useEffect, useState } from 'react';

import MobileNav from './nav/MobileNav';
import WideNav from './nav/WideNav';
const Header = () => {

    const [width, setWidth] = useState(undefined);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);
   
    const Darkmode = () => {
        document.body.classList.toggle('darkmode');
    }
    if (width > 750) {

        return (
            <WideNav Darkmode={Darkmode}/>
        );
    }
    else {
        return (
            <MobileNav Darkmode={Darkmode}/>
        );
    }
}
export default Header;