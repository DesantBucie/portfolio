import Header from './views/Header';
import Greetings from './views/Greetings';
import AboutMe from './views/AboutMe';
import Skills from './views/Skills';
import MyProjects from'./views/MyProjects';
import Contact from './views/Contact';
import GoUpButton from './views/GoUpButton/GoUpButton';

import {FC, useState, useEffect} from 'react';

import './App.scss';

const App: FC = () => {
	const [language, setLanguage] = useState<boolean>(true);
	const [width, setWidth] = useState<number>(window.innerWidth);
	// true - English
	// false - Polish
	const handleLang = () => {
		const html:HTMLElement = document.querySelector('html')!;
		language ? html.setAttribute("lang", "pl-PL") : html.setAttribute("lang", "en-GB");
		setLanguage(!language);
	};
	useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);
  	return (
    	<div className="app">
			<Header width={width} handleLang={handleLang} language={language} />
			<main>
				<Greetings language={language} />
				<AboutMe language={language}/>
				<Skills language={language}/>
				<MyProjects language={language} width={width}/>
				<Contact language={language}/>
				<GoUpButton/>
			</main>
    </div>
  );
}

export default App;
