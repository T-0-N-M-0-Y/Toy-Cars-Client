import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import ShowMyToys from "./ShowMyToys";

const MyToys = () => {

    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/newtoy?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    return (
        <div className="px-20">
            <h1 className='text-4xl font-bold text-center mt-10'>My Collections</h1>

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <ShowMyToys key={myToy._id} myToy={myToy}></ShowMyToys>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;