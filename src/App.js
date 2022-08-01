import './App.css';
import { Destination } from './Components/Destination';
import { Routes, Route } from "react-router-dom";
import {Tour} from "./Components/Tour";
import {Zostel} from './Components/Zostel'
import {ZostelHome} from './Components/Home/ZostelHome';
import {ZostelPlus} from './Components/ZostelPlus'
import {Longstay} from './Components/Longstay'
import {Franchise} from './Components/Franchise'
import {JoinUS} from './Components/JoinUS'
import {Blog} from './Components/Blog'
import {ZoWorld} from './Components/ZoWorld'
import {Footer} from './Components/Footer/Footer';
import {Navbar} from "./Components/Navbar/Navbar";
import { Hotel } from './Components/Hotel/Hotel';
import { Booking } from './Components/Hotel/Booking';
import { Checkout } from './Components/Checkout/Checkout';

function App() {

  

  return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route path="/zostel" element={<Destination />} />
        <Route path="/Tour/:slug" element={<Tour /> } />
          <Route path="/" element={<Zostel />} />
          <Route path="/zostelHome" element={ <ZostelHome /> } />
          <Route path="/zostelPlus" element={<ZostelPlus />} />
          <Route path="/longstays" element={<Longstay />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/joinUs" element={<JoinUS />} />
          <Route path="/blog" element={<Blog /> } />
          <Route path="/zoWorld" element={<ZoWorld />} />
          <Route path='/hotel/:id' element={<Hotel /> } /> 
          <Route path="/booking" element={<Booking /> } />
          {/* <Route path="/checkout" element={<Checkout /> } /> */}
        <Route />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
