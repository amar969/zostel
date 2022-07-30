import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from  './Components/Footer/Footer'
import Destinations from './Components/Destinations'
import Zostel from './Components/Zostel'
import ZostelHomes from './Components/ZostelHomes'
import ZostelPlus from './Components/ZostelPlus'
import Longstays from './Components/Longstays'
import Franchise from './Components/Franchise'
import JoinUs from './Components/JoinUs'
import Blog from './Components/Blog'
import ZoWorld from './Components/ZoWorld'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Navbar/>
     
      <Routes>
          <Route exact path="/" element={<Destinations />} />
          <Route path="/zostel" element={<Zostel />} />
          <Route path="/zostelHomes" element={ <ZostelHomes /> } />
          <Route path="/zostelPlus" element={<ZostelPlus />} />
          <Route path="/longstays" element={<Longstays />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/joinUs" element={<JoinUs />} />
          <Route path="/blog" element={<Blog /> } />
          <Route path="/zoWorld" element={<ZoWorld />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
