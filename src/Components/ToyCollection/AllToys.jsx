import { useLoaderData } from "react-router-dom";
import ShowAllToys from "./ShowAllToys";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { FaSpinner } from "react-icons/fa";
import UseTitle from "../UseTitle";

const AllToys = () => {

    UseTitle("All Toys")

    const toys = useLoaderData();
    const { loading } = useContext(AuthContext)

    if (loading)
        return (
            <>
                <span className="flex justify-center"><FaSpinner className='animate-spin text-4xl my-20'></FaSpinner></span>
            </>
        )

    return (
        <div className="px-20">
            <h1 className='text-4xl font-bold text-center my-10'>See Our Massive Collection</h1>

            <div className="overflow-x-auto w-full my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Seller:</th>
                            <th>Toy Name</th>
                            <th>Sub-Catagory</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.slice(0, 20).map(toy => <ShowAllToys key={toy._id} toy={toy}></ShowAllToys>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;