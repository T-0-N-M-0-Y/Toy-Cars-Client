
const ShowAllToys = ({ toy }) => {

    console.log(toy);

    const { name, toyname, subcatagory, price, rating, quantity } = toy;

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
                <button className="btn btn-ghost btn-xs">Details</button>
            </th>
        </tr>
    );
};

export default ShowAllToys;