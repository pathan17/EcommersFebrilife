import { Route, Routes } from "react-router-dom";
// import "./App.css";
import "./App.css";  // Ensure this path is correct

import Home from './Pages/Home';
import ScrollPages from "./Pages/ScrollPages";
import LoginPage from "./Pages/LoginPage";
import PricePages from "./Pages/PricePages";
import TrackOrder from "./Components/HomeComponent/TrackOrder";
import Registration from "./Pages/Registration";

// import PriceDetels from "./Components/Mens Premium/PriceDetels";






function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Price" element={<PricePages />} />
        <Route path="/newPage" element={<ScrollPages />} />
        <Route path="/path" element={<LoginPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/Order" element={<TrackOrder />} />



      </Routes>
    </>
  );
}

export default App;
