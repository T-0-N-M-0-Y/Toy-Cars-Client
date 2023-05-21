import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <div className="px-40 py-20">
            <div className="card w-full h-screen image-full text-center">
                <figure><img src="https://media.istockphoto.com/id/1067573454/photo/3d-word-oops.jpg?b=1&s=612x612&w=0&k=20&c=sigVwta68SrP8DN-CLIfyI7l81YMpgQEmhBxsvOsp1Q=" alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-5xl text-white font-semibold font-serif flex justify-center items-center'>Error: {status} <br /> {error.message}</p>
                    <div className="card-actions justify-center items-center">
                        <Link className="bg-red-600 p-2 lg:p-3 font-bold text-white rounded-lg hover:bg-yellow-500" to={"/"}> <button>Go Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;