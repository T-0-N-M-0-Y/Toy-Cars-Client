import Banner from "./Header/Banner";
import About from "./HomePage/About";
import Section from "./HomePage/Section";
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
        </div>
    );
};

export default Home;