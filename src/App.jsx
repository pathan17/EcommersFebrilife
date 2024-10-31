import { Route, Routes } from "react-router-dom";
// import "./App.css";
import "./App.css";  // Ensure this path is correct

// import Home from './Pages/Home';
// import ScrollPages from "./Pages/ScrollPages";
// import LoginPage from "./Pages/LoginPage";
import PricePages from "./Pages/PricePages";






function App() {
  return (
    <>
      <Routes>
        
         <Route path="/" element={ <PricePages/> } />
        {/* <Route path="/" element={ <Home/> } />
        <Route path="/path" element={ <LoginPage/> } />
        <Route path="/newPage" element={ <ScrollPages/> } /> */}
        
        
      </Routes>
    </>
  );
}

export default App;
