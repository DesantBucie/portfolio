import Header from './views/Header';
import Greetings from './views/Greetings';
import AboutMe from './views/AboutMe';
import Skills from './views/Skills';
import MyProjects from'./views/MyProjects';
import Contact from './views/Contact';
import GoUpButton from './views/GoUpButton/GoUpButton';

import {FC, useState} from 'react';

import './App.scss';

const App: FC = () => {
	const [language, setLanguage] = useState<boolean>(true);
	// true - English
	// false - Polish
	const handleLang = () => {
		const html:HTMLElement = document.querySelector('html')!;
		language ? html.setAttribute("lang", "pl-PL") : html.setAttribute("lang", "en-GB");
		setLanguage(!language);
	};
  	return (
    	<div className="app">
			<Header handleLang={handleLang} language={language} />
			<main>
				<Greetings language={language} />
				<AboutMe language={language}/>
				<Skills language={language}/>
				<MyProjects language={language}/>
				<Contact language={language}/>
				<GoUpButton/>
			</main>
    </div>
  );
}

export default App;
