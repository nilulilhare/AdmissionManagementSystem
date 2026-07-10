
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './include/Home';
import Contact from './include/Contact';
import Enrollment from './include/Enrollment';
import Navbar from './include/Navbar';

function App() {
  return (
    <div >
     
    <BrowserRouter>
     <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home/>} />
         <Route path='/contact' element={<Contact/>} />
        <Route path='/enroll' element={<Enrollment/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
