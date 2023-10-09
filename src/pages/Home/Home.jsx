import { useEffect } from "react";
import Footer from "./Footer";
import OurAwards from "./OurAwards";
import Review from "./Review";
import Services from "./Services";
import Slider from "./Slider";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    return (
        <div className="p-7 lg:p-0">
            <Slider></Slider>
            <Services></Services>
            <Review></Review>
            <OurAwards></OurAwards>
            <Footer></Footer>
        </div>
    );
};

export default Home;