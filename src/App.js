import './App.css';
import './components/background.css';
import './components/background.js';
import MeshGradient from './components/background.js';
import Navbar from './components/Navbar';
import AboutMe from './pages/About me/aboutme';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MeshGradient/>
      
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
