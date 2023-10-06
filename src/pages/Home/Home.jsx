import Navbar from "../../shared/Navbar";
import Footer from "./Footer";
import Services from "./Services";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;