import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {

    const handleAddaToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const toyname = form.toyname.value;
        const pictureURL = form.pictureURL.value;
        const email = user?.email;
        const subcatagory = form.subcatagory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        event.target.reset();

        const addToy = { name, toyname, pictureURL, email, subcatagory, price, rating, quantity, details }

        fetch("http://localhost:5000/newtoy", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Toy Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
            .catch(error => console.log(error))
    }

    const { user } = useContext(AuthContext);

    return (
        <div className="bg-slate-200 p-24">
            <h1 className='text-5xl font-bold text-center mb-5'>Add Your Toys</h1>
            <form onSubmit={handleAddaToy}>
                <div className="flex">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered lg:w-full mr-5" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="toyname" placeholder="Toy Name" className="input input-bordered lg:w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="pictureURL" placeholder="Picture URL" className="input input-bordered lg:w-full mr-5" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered lg:w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub-Catagory</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcatagory" placeholder="Sub-Catagory" className="input input-bordered lg:w-full mr-5" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered lg:w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered lg:w-full mr-5" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered lg:w-full" />
                        </label>
                    </div>
                </div>
                <textarea className="textarea textarea-bordered lg:w-full my-5" name="details" placeholder="Detailed Description"></textarea>

                <div className="form-control">
                    <input className="text-center text-white bg-red-600 p-3 font-bold rounded-lg hover:bg-yellow-500" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddToys;