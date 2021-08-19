import './AboutMe.scss';

const AboutMe = () => {
    return (
        <div className="about-me" id="about-me">
            <h1>Hello, I'm Jakub</h1>

            <h2>I'm aspiring programmer intrested in OSes and motorsport.</h2>

            <ul>
                <li>Main machine - Macbook Pro 16,3</li>
                <li>Last discovered OS - Illuminos</li>
                <li>Imagine - vim had easy to set up autocompletion</li>
                <li>Fun fact - Kornshell is actually really good, try it</li>
            </ul>
            <a href="https://github.com/DesantBucie">
                <img 
                src="https://github-readme-stats.vercel.app/api?username=DesantBucie&theme=outrun&count_private=true&include_all_commits=true"
                alt="github stats"/>
            </a>
            <h3>Check out my projects below! I hope you find them somehow useful. </h3>

        </div>
    );
}
export default AboutMe;