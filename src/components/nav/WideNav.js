import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import logo from '../../../src/logo.svg';


const WideNav = (props) => {
    return (
        <div className="header">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <section className="header__logo"><img src={logo} alt="logo" /></section>
                    <div>
                        <Button onClick={props.Darkmode} color="primary"><Brightness4Icon /></Button>
                    </div>
                    <div><a href="#about-me">
                        <Button variant="contained" color="primary">About me</Button>
                    </a></div>
                    <div><a href="#my-projects">
                        <Button variant="contained" color="primary">My projects</Button>
                    </a></div>
                    <div><a href="#contact">
                        <Button style={{ backgroundColor: "#21b6ae", }} variant="contained">Contact</Button>
                    </a></div>
                </Grid>
            </div>
    );
};
export default WideNav;