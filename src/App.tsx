import './App.scss';
import Header from './views/Header';
import Greetings from './views/Greetings';
import AboutMe from './views/AboutMe';
import Skills from './views/Skills';
import MyProjects from'./views/MyProjects';
import Contact from './views/Contact';
import {FC, useState} from 'react';

const App: FC = () => {
	const [language, setLanguage] = useState<boolean>(true);
	// true - English
	// false - Polish

	const handleLang = () => {
		setLanguage(!language);
	}

  	return (
    	<div className="app">
			<Header handleLang={handleLang} language={language} />
			<main>
				<Greetings language={language} />
				<AboutMe language={language}/>
				<Skills language={language}/>
				<MyProjects language={language}/>
				<Contact language={language}/>
			</main>
    </div>
  );
}

export default App;
