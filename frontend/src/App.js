import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom"
import Login from "./pages/login";
import Register from "./pages/register";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
