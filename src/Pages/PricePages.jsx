import Footer from "../Components/HomeComponent/Footer";
import AdCartLike from "../Components/Mens Premium/AdCartLike";
import Frequently from "../Components/Mens Premium/Frequently";
import MensMetro from "../Components/Mens Premium/MensMetro";



const PricePages = (props) => {
    return (
        <div>
            <MensMetro />
            <Frequently />
            <AdCartLike />
            <Footer />
        </div>
    );
};

export default PricePages;