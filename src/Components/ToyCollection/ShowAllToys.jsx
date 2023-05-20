import { Link } from "react-router-dom";

const ShowAllToys = ({ toy }) => {

    const { _id, name, toyname, subcatagory, price, rating, quantity } = toy;

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
            <td>{price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/alltoydetails/${_id}`}>
                    <button className="btn btn-ghost btn-xs">Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default ShowAllToys;