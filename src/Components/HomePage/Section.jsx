import ReactTabs from "./ReactTabs";

const Section = () => {

    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-10'>Explore Your Favourite Toys</h1>
            <div className="mb-10">
                <ReactTabs></ReactTabs>
            </div>
        </div>
    );
};

export default Section;