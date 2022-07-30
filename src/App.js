import './App.css';
import { Destination } from './Components/Public/Destination';
import {useParams} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {Tour} from "./Components/Public/Tour";

function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path="/zostel" element={<Destination />} />
        <Route path="/Tour/:slug" element={<Tour /> } />

      </Routes>
    </div>
  );
}

export default App;
