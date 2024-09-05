
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Protectedroute from './Projectedroute';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/logout" element={<Logout/>}/>
    </Routes>
    </>
  );
}

export default App;
