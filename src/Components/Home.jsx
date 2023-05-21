import Banner from "./Header/Banner";
import About from "./HomePage/About";
import Section from "./HomePage/Section";
import Sponsor from "./HomePage/Sponsor";
import Galary from "./HomePage/galary";
import UseTitle from "./UseTitle";

const Home = () => {

    UseTitle('Home');
    
    return (
        <div>
            <Banner></Banner>
            <Galary></Galary>
            <About></About>
            <Section></Section>
            <Sponsor></Sponsor>
        </div>
    );
};

export default Home;