
import HomeFullSleev from "../Components/HomeComponent/HomeFullSleev";
import NewArriVal from "../Components/HomeComponent/NewArriVal";
import DesignerEdition from "../Components/HomeComponent/DesignerEdition";
import ShopMenWomenKids from "../Components/HomeComponent/ShopMenWomenKids";
import FabriLife from "../Components/HomeComponent/FabriLife";
import MensJacket from "../Components/HomeComponent/MensJacket";
import SingleJersey from "../Components/HomeComponent/SingleJersey";
import MenShort from "../Components/HomeComponent/MensShort"
import SportsTrousers from "../Components/HomeComponent/SportsTrousers";
import SportsTshirt from "../Components/HomeComponent/SportsTshirt";
import FaceMask from "../Components/HomeComponent/FaceMask";
import Premium from "../Components/HomeComponent/Premium";
import Antibacktriya from "../Components/HomeComponent/Antibacktriya";
import BlukOrderImg from "../Components/HomeComponent/BlukOrderImg";
import Navbar from "../Components/HomeComponent/Navbar";
import Banner from "../Components/HomeComponent/Banner";
import HadLine from "../Components/HomeComponent/HadLine";
import Footer from "../Components/HomeComponent/Footer";




function App() {


 
 

  return (
    <>
      {/* febrilifeHedline Start */}
        <HadLine/>
      {/* febrilifeHedline End */}

      {/* Navbar start */}
       <div className="  lg:top-0 lg:left-0 lg:w-full lg:sticky z-[999] ">
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

         {/* -----FOOTER----START*/}
         <Footer/> 
         {/* -----FOOTER----END*/}
        
       
      
           
        
       

      


      
    
    </>
  );
}

export default App;
