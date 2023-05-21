import { FaEdit, FaInfo, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowMyToys = ({ myToy, myToys, setMyToys }) => {

    const { _id, name, toyname, subcatagory, price, rating, quantity } = myToy;

    const handleDeleteToy = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-11-car-toy-market-server.vercel.app/newtoy/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success')
                                const remainingToys = myToys.filter(toys => toys._id !== _id);
                                setMyToys(remainingToys);
                        }
                    })
                    .catch(error => console.log(error))
            }
        })
    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {toyname}
            </td>
            <td>{subcatagory}</td>
            <td>$ {price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/alltoydetails/${_id}`}>
                    <button className="btn btn-success btn-xs"><FaInfo></FaInfo></button>
                </Link> <br />
                <Link to={`/updatetoy/${_id}`}>
                    <button className="btn btn-primary btn-xs my-1"> <FaEdit></FaEdit></button>
                </Link> <br />
                <Link>
                    <button className="btn btn-error btn-xs" onClick={() => handleDeleteToy(_id)}><FaTrash></FaTrash></button>
                </Link>
            </th>
        </tr>
    );
};

export default ShowMyToys;