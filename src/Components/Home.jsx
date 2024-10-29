
import HomeFullSleev from "./HomeFullSleev";
import NewArriVal from "./NewArriVal";
import DesignerEdition from "./DesignerEdition";
import ShopMenWomenKids from "./ShopMenWomenKids";
import FabriLife from "./FabriLife";
import MensJacket from "./MensJacket";
import SingleJersey from "./SingleJersey";
import MenShort from "./MensShort"
import SportsTrousers from "./SportsTrousers";
import SportsTshirt from "./SportsTshirt";
import FaceMask from "./FaceMask";
import Premium from "./Premium";
import Antibacktriya from "./Antibacktriya";
import BlukOrderImg from "./BlukOrderImg";
import Navbar from "./Navbar";
import Banner from "./Banner";
import HadLine from "./HadLine";
import LoginPage from "./LoginPage";
import Footer from "./Footer";
// import ScrollPage from "../Pages/ScrollPage";
import ScrollPages from "../Pages/ScrollPages";


function App() {


 
 

  return (
    <>
      {/* febrilifeHedline Start */}
        <HadLine/>
      {/* febrilifeHedline End */}

      {/* Navbar start */}
       <div className=" lg:top-0 lg:left-0 lg:w-full lg:sticky z-[999]">
       <Navbar />
       </div>
        
      {/* Navbar End */}

      {/* banner start */}
         <Banner/> 
      {/* banner End */}

      {/* Shop Now Men Women Kids  Start*/}
        <ShopMenWomenKids/>  
      {/* Shop Now Men Women Kids  End*/}

      {/* NEEW----ARRIVAL----START*/}
        <NewArriVal/> 
      {/* NEEW----ARRIVAL----END*/}

      {/* Img----Designer Edition----START*/}
       <DesignerEdition/> 
      {/* Img----Designer Edition----END*/}

      {/* Img----HomeFullSleev--T-Shart---start*/}
      <HomeFullSleev/>
      {/* Img----HomeFullSleev--T-Shart--End-*/}

      {/* ---FabriLife--text--Img----start*/}
      <FabriLife/>
      {/* ---FabriLife--text--Img----End*/}

      {/* ---Mens---jacket--Img----start*/}
      <MensJacket/>
      {/* ---Mens---jacket--Img----End*/}

      {/* ---Single---jersey--Img----Start*/}
        <SingleJersey/>
      {/* ---Single---jersey--Img----End*/}

      {/* ---Mens---Short--Img----Start*/}
         <MenShort/>
      {/* ---Mens---Short--Img----End*/}

      {/* -Shorts----Trousers---Img----START*/}
      <SportsTrousers/>
      {/* -Shorts----Trousers---Img----End*/}

      {/* -Shorts----T--Shirt---Img----Start*/}
      <SportsTshirt/>
      {/* -Shorts----T--Shirt---Img----End*/}

      {/* -Face----Mask---image---start*/}
      <FaceMask/>
      {/* -Face----Mask---image---End*/}
       
       {/* -----Premium -----start-*/}
       <Premium/>
       {/* -----Premium -----End-*/}

       {/* -----Antibacktiriya-----start-*/}
       <Antibacktriya/> 
       {/* -----Antibacktiriya-----End*/}

        {/* -----Bluk-- Order---start*/}
        <BlukOrderImg/>
        {/* -----Bluk-- Order---End*/}

        <LoginPage/>

         {/* -----FOOTER----START*/}
         <Footer/> 
         {/* -----FOOTER----END*/}
        
      
           
        {/* scrollpage */}
        {/* <ScrollPage></ScrollPage> */}

        <ScrollPages></ScrollPages>


      
    
    </>
  );
}

export default App;
