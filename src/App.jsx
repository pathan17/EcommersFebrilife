import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./Components/Home";
import "./App.css";  // Ensure this path is correct
// import ScrollPages from "./Pages/ScrollPages";
import Problem from "./Pages/Problem";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Problem/> } />
      </Routes>
    </>
  );
}

export default App;
