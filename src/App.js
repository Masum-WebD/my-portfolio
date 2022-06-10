import './App.css';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Details from './component/Details';
import Footer from './component/Footer';

function App() {
  return (
    <div  className='bg-[#2A303C]'>
       <Navbar></Navbar> 
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
