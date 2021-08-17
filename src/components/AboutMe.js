const AboutMe = () => {
    return (
        <div className="about-me" id="about-me">
            <h1>Hello, I'm Jakub</h1>
            <a href="https://github.com/DesantBucie">
                {/*<img 
                src="https://img.shields.io/badge/change%20da%20world-my%20final%20message-green?style=flat-square&/"
                alt="My Shield"/>*/}
            </a>

            <p>I'm aspiring programmer intrested in OSes and motorsport.</p>

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
            <p>Check out my projects on github! I hope you find them somehow useful. </p>

        </div>
    );
}
export default AboutMe;