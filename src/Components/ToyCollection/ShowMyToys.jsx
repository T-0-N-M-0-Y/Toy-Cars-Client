import { FaEdit,  FaInfo,  FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShowMyToys = ({ myToy }) => {

    const { _id, name, toyname, subcatagory, price, rating, quantity } = myToy;

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
                <Link>
                    <button className="btn btn-primary btn-xs my-1"> <FaEdit></FaEdit></button>
                </Link> <br />
                <Link>
                    <button className="btn btn-error btn-xs"><FaTrash></FaTrash></button>
                </Link>
            </th>
        </tr>
    );
};

export default ShowMyToys;