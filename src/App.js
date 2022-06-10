import './App.css';
import Home from './component/Home';
import { Routes } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
    <div >
       <Navbar></Navbar> 
      <Home></Home>
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
