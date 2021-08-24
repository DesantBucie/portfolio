import Button from '@material-ui/core/Button';

import './Bothnav.scss';
const WideNav = () => {
    return (
        <nav className="nav">
            <div><a href="#about-me">
                <Button variant="contained" color="primary">About me</Button>
            </a></div>
            <div><a href="#my-projects">
                <Button variant="contained" color="primary">My projects</Button>
            </a></div>
            <div><a href="#contact">
                <Button style={{ backgroundColor: "#21b6ae", }} variant="contained">Contact</Button>
            </a></div>
        </nav>
    );
};
export default WideNav;