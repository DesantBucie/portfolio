import Grid from '@material-ui/core/Grid';

import korny from './media/korny.png';
import paleofetch from './media/paleofetch.gif';
import easy_vim from './media/easy-vim.gif'
import antila from './media/antila.png'

import './MyProjects.scss';

const MyProjects = () => {
    return (
        <div className="my-projects" id="my-projects">
            <h2>My projects</h2>
            <section className="my-projects__project">
            <Grid
        
            container
            spacing={4}
            justifyContent="center"
            alignItems="center">
                <Grid container item sm={12} md={6}>
                    <h3><a href="https://github.com/DesantBucie/korny">Korny</a></h3> 
                    <p>
                        is plugin simplifying use of ksh93, and I think it is my most useful project. It makes easier to make new prompts with good performance, it has git branch prompting built in and long and short pwd prompting. Also I think it has only `autocd` solution for kornshell that was made by <a href="https://github.com/MCDutchie">MCDutchie</a> after I asked him for a solution. It works on many systems (including OpenBSD where tput command needs three arguments instead of one)  
                    </p>
                </Grid>
                <Grid container item sm={12} md={6}>
                    <div className="my-projects__image"><img src={korny} alt="korny"/></div>
                </Grid>
            </Grid>
            </section>
            <section className="my-projects__project">
            <Grid 
           
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            direction="row-reverse">
                <Grid container item sm={12} md={6}>
                    <h3><a href="https://gitlab.com/DesantBucie/paleofetch-mac">Paleofetch-BSD</a></h3> 
                    <p>
                        is a fork of a copy of neofetch written in C. Currently works only on mac, I'll try to bring it on the BSDs and Solaris family. It is on macOS even <b>20 times faster</b> than neofetch. Most of code is new.
                    </p>
                </Grid>
                <Grid container item sm={12} md={6}>
                    <div className="my-projects__image"><img src={paleofetch} alt="paleofetch"/></div>
                </Grid>
            </Grid>
            </section>
            <section className="my-projects__project">
            <Grid 
            
            container
            spacing={4}
            justifyContent="center"
            alignItems="center">
                <Grid container item sm={12} md={6}>
                    <h3><a href="https://github.com/DesantBucie/easy-vim">Easy-Vim</a></h3> 
                    <p>
                        is currently just a prototype and concept of what I would like achieve, that is, easy to set and use vim completion almost or completly without additional dependecies. If you want something already working then use <a href="https://github.com/DesantBucie/Verde">Verde</a> (It works very well with macvim.) or <a href="https://github.com/DesantBucie/exrc">Exrc</a> for vi.
                    </p>
                </Grid>
                <Grid container item sm={12} md={6}>
                    <div className="my-projects__image"><img src={easy_vim} alt="EasyVim"/></div>
                </Grid>
            </Grid>
            </section>
            <section className="my-projects__project">
            <Grid 
            
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            direction="row-reverse">
                <Grid container item sm={12} md={6}>
                    <h3><a href="https://github.com/DesantBucie/aquila">Aquila</a></h3> 
                    <p>
                        is old learning project, that is quite abandoned that I'm sure has many mistakes, and outdates, but it's example of me working with data from api.
                    </p>
                </Grid>
                <Grid container item sm={12} md={6}>
                    <div className="my-projects__image"><img src={antila} alt="antila"/></div>
                </Grid>

            </Grid>
            </section>
        </div>
    );
}
export default MyProjects;