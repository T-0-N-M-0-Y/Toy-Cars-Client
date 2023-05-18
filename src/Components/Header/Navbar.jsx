import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
    }


    return (
        <div>
            <div className="navbar p-3 bg-sky-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to={"/"}>Home</Link>
                            <Link to={"/alltoys"} tabIndex={0} className="justify-between"> All Toys
                            </Link>
                            <Link to={"/mytoys"}>My Toys</Link>
                            <Link to={"/addtoys"}>Add Toys</Link>
                            <Link to={"/blogs"}>Blogs</Link>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="h-16 w-16 rounded-full" src="https://w7.pngwing.com/pngs/700/802/png-transparent-hot-wheels-model-car-die-cast-toy-hot-wheels-logo-car-smiley.png" alt="" />
                        <h1 className="ml-2 text-3xl font-bold text-red-600">Toy <span className="text-yellow-400">Cars</span></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        <Link className="mr-4 p-3 font-bold text-white hover:underline" to={"/"}>Home</Link>
                        <Link className="mr-4 p-3 font-bold text-white hover:underline" to={"/alltoys"} tabIndex={0}> All Toys
                        </Link>
                        <Link className="mr-4 p-3 font-bold text-white hover:underline" to={"/mytoys"}>My Toys</Link>
                        <Link className="mr-4 p-3 font-bold text-white hover:underline" to={"/addtoys"}>Add Toys</Link>
                        <Link className="mr- p-3 font-bold text-white hover:underline" to={"/blogs"}>Blogs</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <Link className="mr-4 bg-yellow-400 p-3 font-bold text-white rounded-lg hover:bg-red-500"> <button onClick={handleSignOut}>Log out</button></Link>
                            :
                            <Link className="mr-4 bg-yellow-400 p-3 font-bold text-white rounded-lg hover:bg-red-500" to={"/login"}> <button>Login</button></Link>
                    }

                    {
                        user ? <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                            <img className="h-14 w-14 rounded-full" src={user.photoURL} referrerPolicy="no-referrer" />
                        </div>
                            :
                            <Link className="mr-4 bg-red-600 p-3 font-bold text-white rounded-lg hover:bg-yellow-400" to={"/signup"}> <button>Sign Up</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;