import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Home from './pages/Home'
import Game from './pages/Game'
import Eshop from './pages/Eshop'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Intro />
        <Routes>         
          <Route path='/' element = {<Home />} />
          <Route path='eshop' element = {<Eshop />}/>
          <Route path='game' element = {<Game />}/>
        </Routes>        
        <Footer />
      </Router>     
    </>
  );
}

export default App;
