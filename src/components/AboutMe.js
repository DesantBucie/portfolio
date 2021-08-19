import './AboutMe.scss';

const AboutMe = () => {
    return (
        <div>
            <div className="about-me__tilt">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="about-me__shape-fill"></path>
                    </svg>
                </div>
        <div className="about-me" id="about-me">
            <h1>Hello, I'm Jakub</h1>

            <h2>I'm aspiring programmer intrested in OSes and motorsport.</h2>

            <a href="https://github.com/DesantBucie">
                <img 
                src="https://github-readme-stats.vercel.app/api?username=DesantBucie&theme=outrun&count_private=true&include_all_commits=true"
                alt="github stats"/>
            </a>
            <h3>Check out my projects below! I hope you find them somehow useful. </h3>
        </div>
        </div>
    );
}
export default AboutMe;