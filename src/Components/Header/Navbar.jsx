import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar p-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to={"/"}>Home</Link>
                            <Link to={"/"} tabIndex={0} className="justify-between"> All Toys
                            </Link>
                            <Link to={"/"}>My Toys</Link>
                            <Link to={"/"}>Add Toys</Link>
                            <Link to={"/"}>Blogs</Link>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="h-14 w-14" src="https://w7.pngwing.com/pngs/700/802/png-transparent-hot-wheels-model-car-die-cast-toy-hot-wheels-logo-car-smiley.png" alt="" />
                        <h1 className="ml-2 text-3xl font-bold text-red-600">Toy <span className="text-yellow-400">Cars</span></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link className="mr-4 p-3 font-bold text-sky-800 hover:underline" to={"/"}>Home</Link>
                        <Link className="mr-4 p-3 font-bold text-sky-800 hover:underline" to={"/"} tabIndex={0}> All Toys
                        </Link>
                        <Link className="mr-4 p-3 font-bold text-sky-800 hover:underline" to={"/"}>My Toys</Link>
                        <Link className="mr-4 p-3 font-bold text-sky-800 hover:underline" to={"/"}>Add Toys</Link>
                        <Link className="mr- p-3 font-bold text-sky-800 hover:underline" to={"/"}>Blogs</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="mr-4 bg-yellow-400 p-3 font-bold text-white rounded-lg hover:bg-red-500" to={"/login"}> <button>Login</button></Link>
                    <Link className="mr-4 bg-red-600 p-3 font-bold text-white rounded-lg hover:bg-yellow-400" to={"/signup"}> <button>Sign Up</button></Link>
                    <img className="h-14 w-14" src="https://w7.pngwing.com/pngs/700/802/png-transparent-hot-wheels-model-car-die-cast-toy-hot-wheels-logo-car-smiley.png"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;