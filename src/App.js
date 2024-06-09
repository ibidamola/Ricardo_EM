import logo from "./logo.svg";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from "./components/Contact";
import Services from "./components/Services";
import Reviews from "./components/Reviews"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>} />

          <Route path="About" element={<About/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="Services" element={<Services/>}  />
          <Route path="Reviews" element={<Reviews/>}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
