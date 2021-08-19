import './App.scss';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MyProjects from'./components/MyProjects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <MyProjects />
      <Contact />
    </div>
  );
}

export default App;
