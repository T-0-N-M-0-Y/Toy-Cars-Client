import Banner from "./Header/Banner";
import Galary from "./HomePage/galary";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Galary></Galary>
            <h1 className='text-4xl font-bold'>Home</h1>
        </div>
    );
};

export default Home;