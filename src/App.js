import './App.css';
import { Destination } from './components/Destination';
import {useParams} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {Tour} from "./components/Tour";

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
