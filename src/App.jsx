import { Route, Routes } from "react-router-dom";
// import "./App.css";
import "./App.css";  // Ensure this path is correct

import Home from './Pages/Home';
import ScrollPages from "./Pages/ScrollPages";
import LoginPage from "./Pages/LoginPage";





function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={ <Home/> } />
        <Route path="/newPage" element={ <ScrollPages/> } />
        <Route path="SinIn/" element={ <LoginPage/> } />
        
        
      </Routes>
    </>
  );
}

export default App;
