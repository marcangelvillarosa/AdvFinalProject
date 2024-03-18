import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Gallery from "./pages/GalleryPage";




function App() {
 return(
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path='/HomePage' element={<Home/>} />
            <Route path='/LoginPage' element={<Login/>} />
            <Route path='/RegisterPage' element={<Register />} />
            <Route path='/GalleryPage' element={<Gallery/>} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
