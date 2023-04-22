import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <About />
        <Blog />
        <Contact />
        <Footer />
        <Routes>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
