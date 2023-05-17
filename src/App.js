import './App.css';
// import './components/background.css';
// import './components/background.js';
// import MeshGradient from './components/background.js';
// import AboutMe from './pages/About me/aboutme';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './pages/Home/home';
import Header from './components/header';
import Hero from './components/Hero';
import SeeWork from './components/myWork';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      {/*<div style={{height: 1000, backgroundColor: 'pink'}}></div>*/}
      <SeeWork/>
      <Footer/>
    </div>
  );
}

export default App;
