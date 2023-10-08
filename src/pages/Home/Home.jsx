import Footer from "./Footer";
import OurAwards from "./OurAwards";
import Review from "./Review";
import Services from "./Services";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Review></Review>
            <OurAwards></OurAwards>
            <Footer></Footer>
        </div>
    );
};

export default Home;