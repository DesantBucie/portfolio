import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

import './Bothnav.scss';

const MobileNav = () => {
    const OpenSidebar = async () => {
        document.getElementById("nav__sidenav").style.width = '300px';
    }
    const CloseSidebar = async () => {
        document.getElementById("nav__sidenav").style.width = '0';
    }
    return (
                <nav className="nav">
                    <div>
                        <Button onClick={OpenSidebar} style={{ backgroundColor: "#21b6ae", }} variant="contained"><MenuIcon /></Button>
                    </div>
                    <div id="nav__sidenav" className="nav__sidenav">
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
                </nav>
    );
};
export default MobileNav;