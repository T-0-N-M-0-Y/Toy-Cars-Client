import ReactTabs from "./ReactTabs";

const Section = () => {

    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10'>Choose Your Toys</h1>
            <div className="mb-10">
                <ReactTabs></ReactTabs>
            </div>
        </div>
    );
};

export default Section;