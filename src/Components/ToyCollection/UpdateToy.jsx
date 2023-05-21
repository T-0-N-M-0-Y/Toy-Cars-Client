import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseTitle from "../UseTitle";

const UpdateToy = () => {

    UseTitle("Update Toys")

    const selectedToy = useLoaderData();
    const { _id, price, quantity, details } = selectedToy;

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        event.target.reset();

        const updateToy = { price, quantity, details }

        fetch(`https://assignment-11-car-toy-market-server.vercel.app/newtoy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Update Complete',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="p-24">
            <h1 className='text-5xl font-bold text-center mb-5'>Update Your Toy</h1>
            <form onSubmit={handleUpdateToy}>
                <div className="flex">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered lg:w-full mr-10" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered lg:w-full" />
                        </label>
                    </div>
                </div>
                <textarea className="textarea textarea-bordered lg:w-full my-5" name="details" defaultValue={details} placeholder="Detailed Description"></textarea>

                <div className="form-control">
                    <input className="text-center text-white bg-red-600 p-3 font-bold rounded-lg hover:bg-yellow-500" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;