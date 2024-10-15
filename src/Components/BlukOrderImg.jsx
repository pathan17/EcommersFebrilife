import BlukOrder from '../assets/BulkOrderImg.jpg';
import { FaChevronRight } from "react-icons/fa";

const BlukOrderImg = () => {
    return (
        <div>
            <div className="main container mx-auto lg:max-w-[1120px]">
                <div className="text">
                    <h1>Bulk Order / Wholesale <FaChevronRight /> </h1>
                    <p>We provide plain t-shirts and apparel fo all your custom branding needs from the top brands worldwide at unbeatable wholesale prices. With no minimum orders, everyone can enjoy the benefits of buying bulk t-shirts without ordering bulk quantities.</p>
                </div>
                <div className="img"></div>
            </div>
        </div>
    );
};

export default BlukOrderImg;