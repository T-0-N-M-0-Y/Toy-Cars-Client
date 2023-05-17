import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                            <Link className=" text-center text-sky-800 bg-yellow-400 p-3 font-bold rounded-lg hover:bg-red-500" to={"/login"}> <button>Login</button></Link>
                            </div>
                            <Link to={"/signup"}>No Account? <span className="text-red-600 hover:underline">Click here</span> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;