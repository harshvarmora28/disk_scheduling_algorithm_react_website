import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FCFSCalculate from "./components/FCFSCalculate";
import FCFSLearnMore from "./components/FCFSLearnMore";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/fcfscalculate" element={<FCFSCalculate />} />
          <Route exact path="/fcfslearnmore" element={<FCFSLearnMore />} />
        </Routes>
      </BrowserRouter>

      <Footer/>
    </>
  );
}

export default App;
