import { Route, Routes } from "react-router-dom";
// import "./App.css";
import "./App.css";  // Ensure this path is correct
// import ScrollPages from "./Pages/ScrollPages";
// import Problem from "./Pages/Problem";
import Home from './Components/Home'




function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={ <Problem/> } /> */}
        <Route path="/" element={ <Home/> } />
      </Routes>
    </>
  );
}

export default App;
