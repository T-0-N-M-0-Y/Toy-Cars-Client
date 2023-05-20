import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Signup = () => {

    const { submitUser } = useContext(AuthContext);

    const handleSignUpSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        submitUser(email, password)
            .then(result => {
                const userDataFound = result.user;
                if (userDataFound) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Sign up Complete',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                event.target.reset();
                dataUpdate(result.user, name, photo);
                window.location.reload()
            })
            .catch(error => console.log(error))
    }

    const dataUpdate = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then(() => {})
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-5">Sign Up now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUpSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="Email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="Password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="text-center text-white bg-red-600 p-3 font-bold rounded-lg hover:bg-yellow-500" type="submit" value="Sign Up" />
                                </div>
                                <Link to={"/login"}>Already have an Account? <span className="text-red-600 hover:underline">Click here</span> </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;