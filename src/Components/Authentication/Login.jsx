import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../AuthProviders/AuthProvider";
import { useContext } from "react";

const Login = () => {

    const { logIn } = useContext(AuthContext);

    const handleLogInSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))

    }

    return (
        <div className="">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogInSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="text-center text-sky-800 bg-yellow-400 p-3 font-bold rounded-lg hover:bg-red-500" type="submit" value="Login" />
                                </div>
                                <Link to={"/signup"}>No Account? <span className="text-red-600 hover:underline">Click here</span> or</Link>
                                <div className="flex justify-between items-center">
                                    <p>Login with......</p>
                                    <button><FaGoogle></FaGoogle></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;