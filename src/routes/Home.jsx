import Navbar from "../components/landingPage/Navbar";
import Banner from "../components/landingPage/Banner";
import Features from "../components/landingPage/Features";
import Footer from "../components/Footer";

const Home = () =>{



    return(
        <div className="">
            <div className="">
                <Navbar />
            </div>
            <div className="mt-2">
                <Banner />
            </div>
            <div className="">
                <Features />
            </div>
            <div className="mx-5">
                <Footer />
            </div>
        </div>
    )
};


export default Home;