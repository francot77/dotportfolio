import NavBar from './components/navbar';
import './App.css';
import AboutMe from './components/aboutme';
import Header from './components/header';

function App() {
  return (
    <div className="container" id="home">
                <NavBar/>
       <Header/>
        <AboutMe/>
    </div>
  );
}

export default App;
