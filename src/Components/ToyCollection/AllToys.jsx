import { useLoaderData } from "react-router-dom";
import ShowAllToys from "./ShowAllToys";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { FaSpinner } from "react-icons/fa";
import UseTitle from "../UseTitle";

const AllToys = () => {

    UseTitle("All Toys")

    const toys = useLoaderData();
    const [searchToys, setSearchToys] = useState('')

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

            <div className="form-control">
                <div className="input-group">
                    <form>
                        <input type="text" placeholder="Search Toy" className="input input-bordered" onChange={(e) => setSearchToys(e.target.value)} />
                    </form>
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

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
                            toys.slice(0, 20).filter((toy) =>{
                                return searchToys.toLowerCase() === '' ? toy : toy.toyname.toLowerCase().includes(searchToys)
                            }).map(toy => <ShowAllToys key={toy._id} toy={toy}></ShowAllToys>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;