import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs";
import Donate from "./pages/Donate";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/donation" element={<Donate/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
