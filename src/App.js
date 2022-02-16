import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Complain from './Complain';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import Otp from './Otp';
import Otp2 from './Otp2';
import Auth from './Auth';
import Acts from './Acts';
import Admin from './Admin';
import Adminlog from './Adminlog';
import About from './About';
import Contact from './Contact';
import Chat from './Chat';


function App() {
  return (
    <div className="app">
    <Router>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/complain" element={<Complain />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/auth" element={<Auth />} />
    <Route path="/acts" element={<Acts />} />
    <Route path="/adminlog" element={<Adminlog />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/about" element={<About />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/otp" element={<Otp />} />
    <Route path="/otp2" element={<Otp2 />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
