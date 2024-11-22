import './App.css';
import NavBar from './components/navbar';
import AboutMe from './components/aboutme';
import Header from './components/header';
import Contact from './components/contact';
import Footer from './components/footer';
import Lumber from './components/lumber';

function App() {
 
  return (
    <div className="container" id="home">
                
                <NavBar/>
       <Header/>
        <AboutMe/>
        <Contact/>
        <Lumber/>
        <Footer/>
    </div>
  );
}

export default App;
