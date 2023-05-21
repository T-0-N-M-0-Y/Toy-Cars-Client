const Photos = ({ data }) => {

    const { picture } = data;

    return (
        <div>
            <div className="card w-full h-40 bg-base-100 shadow-xl" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <figure><img src={picture} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default Photos;