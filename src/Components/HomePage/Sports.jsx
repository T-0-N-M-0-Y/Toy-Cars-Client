import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sports = ({ catagoryToy }) => {

    const { _id, pictureURL, toyname, price, rating } = catagoryToy;

    return (
        <div>
            <div className="card card-compact w-full h-96  bg-base-100 shadow-xl" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <figure><img src={pictureURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyname}</h2>
                    <p>Price: ${price}</p>
                    <p className="flex items-center">Rating: {rating} <FaStar className="ml-2"></FaStar></p>
                    <div className="card-actions justify-end">
                        <Link to={`/alltoydetails/${_id}`}>
                            <button className="btn btn-ghost btn-xs">Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;