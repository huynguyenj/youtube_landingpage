import './App.css';

import Header from './components/Header'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Search from './pages/Search';


function App() {
  return (

    <Router>
      <Header />

      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchterm" element={<Search />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
