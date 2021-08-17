import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './Footer.scss';
const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://github.com/DesantBucie"><GitHubIcon/></a>
            <a href="https://gitlab.com/DesantBucie"><AccountCircleIcon/></a>
        </footer>
    );
}
export default Footer;