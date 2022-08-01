import './App.css';
import Navbar from './components/navbar/Navbar'
import Footer from  './components/footer/Footer'
// import Login from "./components/login/Login"
// import Home from './components/home/Home'
import Register from "./Register"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Register/>
      {/* <Home/> */}
      {/* <Login/> */}
      <Footer/>
    </div>
  );
}

export default App;
