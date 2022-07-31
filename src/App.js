import './App.css';
import { Destination } from './Components/Destination';
import { Routes, Route } from "react-router-dom";
import {Tour} from "./Components/Tour";
import {Zostel} from './Components/Zostel'
import {ZostelHomes} from './Components/ZostelHome';
import {ZostelPlus} from './Components/ZostelPlus'
import {Longstay} from './Components/Longstay'
import {Franchise} from './Components/Franchise'
import {JoinUS} from './Components/JoinUS'
import {Blog} from './Components/Blog'
import {ZoWorld} from './Components/ZoWorld'
import {Footer} from './Components/Footer/Footer';
import {Navbar} from "./Components/Navbar/Navbar";

function App() {

  

  return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route path="/zostel" element={<Destination />} />
        <Route path="/Tour/:slug" element={<Tour /> } />
          <Route path="/" element={<Zostel />} />
          <Route path="/zostelHomes" element={ <ZostelHomes /> } />
          <Route path="/zostelPlus" element={<ZostelPlus />} />
          <Route path="/longstay" element={<Longstay />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/joinUs" element={<JoinUS />} />
          <Route path="/blog" element={<Blog /> } />
          <Route path="/zoWorld" element={<ZoWorld />} />
        <Route />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
