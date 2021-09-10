import korny from '../media/korny.png';
import paleofetch from '../media/paleofetch.gif';
import easy_vim from '../media/easy-vim.gif';
import antila from '../media/antila.png';

export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
export const SliderContent = [
    {
        id:0,
        image: korny,
        header:'Korny',
        text:'is plugin simplifying use of ksh93, and I think it is my most useful project. It makes easier to make new prompts with good performance, it has git branch prompting built-in and long and short pwd prompting. Also I think it has only `autocd` solution for kornshell that was made thanks to ksh community. It works on most unix systems including OpenBSD.',
        textpl:'to plugin ułatwiający użycie ksh93 i jeden z moich najbardziej użytecznych projektów. Dużo prościej tworzy się motywy konsoli, ma wbudowany plugin git-branch. Także chyba posiada jedyne rozwiązanie autocd dla Kornshella, dzięki pomocy społeczności ksh93. Działa  na większości systemów unixowych, włącznie z OpenBSD',
        github:'https://github.com/DesantBucie/korny',
    },
    {   
        id:1,
        image: paleofetch,
        header:'Paleofetch',
        text:"is a fork of a copy of neofetch written in C. Currently works only on mac, I'll try to bring it on the BSDs and Solaris family. It is on macOS even 20 times faster than neofetch. Most of code is new.",
        textpl:'to fork kopii neofetch\'a napisanej w C. Obecnie działa tylko na macu, ale postaram się przeportować to też na BSD i Solarisy. Na macOS\'ie jest około 20 razy szybszy niż neofetch. Większość kodu jest nowa.',
        gitlab:'https://gitlab.com/DesantBucie/paleofetch-mac',
    },
    {   
        id:2,
        image: easy_vim,
        header:'Easy-Vim',
        text:'is currently just a prototype and concept of what I would like achieve, that is, easy to set and use vim completion almost or completly without additional dependecies. If you want something already working then use <a href="https://github.com/DesantBucie/Verde">Verde</a> (It works very well with macvim.) or <a href="https://github.com/DesantBucie/exrc">Exrc</a> for vi.',
        textpl:'',
        github:'https://github.com/DesantBucie/easy-vim',
    },
    {   
        id:3,
        image: antila,
        header:'Antila',
        text:"is old learning project, that is quite abandoned that I'm sure has many mistakes, and outdates, but it's example of me working with data from api.",
        textpl:'',
        github:'https://github.com/DesantBucie/antila',
    },
];