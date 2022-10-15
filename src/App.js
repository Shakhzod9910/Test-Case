import './App.scss';
import Footwear from './Pages/Footwear';
import About from './Pages/About us';
import Product from './Pages/Products';
import Sale from './Pages/Sale';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {

  
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Footwear/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/sale' element={<Sale/>} />  
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
