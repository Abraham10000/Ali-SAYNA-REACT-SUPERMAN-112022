import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/intro'
import Home from './pages/Home'
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Intro />
        <Routes>
          <Route path='/' element = {<Home />} />
        </Routes>
        <Footer />
      </Router>     
    </>
  );
}

export default App;
