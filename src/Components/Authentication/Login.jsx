import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../AuthProviders/AuthProvider";
import { useContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const { logIn, logInWithGoogle } = useContext(AuthContext);

    const provider = new GoogleAuthProvider();
    const  navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location?.state?.from?.pathname || "/";

    const handleLogInSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
        .then(result => {
            result.user;
            navigate(redirectTo, { replace: true });
        })
        .catch(error => console.log(error))

    }

    const handleGoogleLogIn = event => {
        event.preventDefault();

        logInWithGoogle(provider)
        .then(result => {
            result.user;
            navigate(redirectTo, { replace: true });
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
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        name="password" placeholder="Password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="text-center text-white bg-red-600 p-3 font-bold rounded-lg hover:bg-yellow-500" type="submit" value="Login" />
                                </div>
                                <Link to={"/signup"}>No Account? <span className="text-red-600 hover:underline">Click here</span> or</Link>
                                <div className="flex justify-between items-center">
                                    <p>Login with......</p>
                                    <button onClick={handleGoogleLogIn}><FaGoogle></FaGoogle></button>
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