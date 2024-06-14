import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Header} from "./sections/index";
import { About, Home , Equipment } from "./Pages/index";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/equipment" element={<Equipment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
