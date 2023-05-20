import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const AllToysDetails = () => {

    const toyDetails = useLoaderData()
    console.log(toyDetails);

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
                    <p>Price: {price}</p>
                    <p className="flex items-center">Rating: {rating}<FaStar className="ml-2"></FaStar></p>
                    <div className="card-actions justify-start">
                    <Link className="bg-red-600 p-2 lg:p-3 font-bold text-white rounded-lg hover:bg-yellow-500" to={"/alltoys"}> <button>See More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToysDetails;