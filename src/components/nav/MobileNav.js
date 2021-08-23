import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import logo from '../../../src/logo.svg';
const MobileNav = (props) => {
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const OpenSidebar = async () => {
        document.getElementById("header__sidenav").style.display = 'block';
        await sleep(20);
        document.getElementById("header__sidenav").style.width = '300px';
    }
    const CloseSidebar = async () => {
        document.getElementById("header__sidenav").style.width = '0';
        document.getElementById("header__sidenav").style.transition = '0.5s';
        await sleep(500);
        document.getElementById("header__sidenav").style.display = 'none';

    }
    return (
        <div className="header">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <section className="header__logo">
                        <img src={logo} alt="logo" />
                    </section>
                    <div><Button onClick={props.Darkmode} color="primary"><Brightness4Icon /></Button></div>
                    <div><Button onClick={OpenSidebar} style={{ backgroundColor: "#21b6ae", }} variant="contained"><MenuIcon /></Button></div>
                    <div id="header__sidenav" className="header__sidenav">
                        <Button onClick={CloseSidebar}><CloseIcon style={{ fontSize: "3em" }} /></Button>
                        <a href="#about-me" onClick={CloseSidebar}>
                            <Button variant="contained" color="primary">About me</Button>
                        </a>
                        <a href="#my-projects" onClick={CloseSidebar}>
                            <Button variant="contained" color="primary">My projects</Button>
                        </a>
                        <a href="#contact" onClick={CloseSidebar}>
                            <Button color="primary" variant="contained">Contact</Button>
                        </a>
                    </div>
                </Grid>
            </div>
    );
};
export default MobileNav;