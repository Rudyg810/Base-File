import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Register from './pages/Register';
import Contact from './pages/contact';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import './App.css';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Router>
      <Navbar/>

        <Routes> 
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Homepage />} />
          
        </Routes>
      </Router>
        
      </header>
    </div>
  );
}

export default App;
