import { Route, Routes } from "react-router-dom";
// import "./App.css";
import "./App.css";  // Ensure this path is correct

import Home from './Components/Home';
import ScrollPages from "./Pages/ScrollPages";




function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={ <Home/> } />
        <Route path="/newPage" element={ <ScrollPages/> } />
        
      </Routes>
    </>
  );
}

export default App;
