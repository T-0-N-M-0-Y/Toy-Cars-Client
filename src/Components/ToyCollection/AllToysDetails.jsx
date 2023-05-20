import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const AllToysDetails = () => {

    const toyDetails = useLoaderData()

    const { pictureURL, toyname, name, email, price, rating, quantity, details } = toyDetails;

    return (
        <div>
            <div className="card card-side bg-slate-200 shadow-xl py-20 px-64">
                <figure><img className="w-full h-full" src={pictureURL} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">{toyname} <div className="badge badge-secondary">NEW</div></h2>
                    <p>{details}</p>
                    <p>Seller name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Available Quantitiy: {quantity}</p>
                    <p>Price: ${price}</p>
                    <p className="flex items-center">Rating: {rating}<FaStar className="ml-2"></FaStar></p>
                    <div className="card-actions justify-start">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToysDetails;