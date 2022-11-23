import Header from './comps/header/Header';
import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
