import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-screen">
                    <img src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-1 right-1 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-sky-800 hover:bg-sky-500 text-white border-none">❮</a>
                        <div className="bg-gradient-to-r from-black p-10">
                            <p className="text-white font-bold text-8xl" data-aos="flip-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">Pick The Best Toy for your kids</p> <br />
                            <p className="text-white font-bold text-2xl">Your Happiness Our Priority!!!</p> <br />
                            <Link className="bg-red-600 p-2 lg:p-3 font-bold text-white rounded-lg hover:bg-yellow-500" to={"/alltoys"}> <button>Discover</button></Link>
                        </div>
                        <a href="#slide2" className="btn btn-circle bg-sky-800 hover:bg-sky-500 text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-screen h-screen">
                    <img src="https://images.pexels.com/photos/2767817/pexels-photo-2767817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-1 right-1 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-sky-800 hover:bg-sky-500 text-white border-none">❮</a>
                        <div className="bg-gradient-to-r from-black p-10">
                            <p className="text-white font-bold text-8xl">Get a Bonus on First Order</p> <br />
                            <p className="text-white font-bold text-2xl">Best Offers For Regular Customers!!!</p> <br />
                            <Link className="bg-red-600 p-2 lg:p-3 font-bold text-white rounded-lg hover:bg-yellow-500" to={"/alltoys"}> <button>Discover</button></Link>
                        </div>
                        <a href="#slide3" className="btn btn-circle bg-sky-800 hover:bg-sky-500 text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-screen h-screen">
                    <img src="https://images.pexels.com/photos/2767818/pexels-photo-2767818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-1 right-1 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-sky-800 hover:bg-sky-500 text-white border-none">❮</a>
                        <div className="bg-gradient-to-r from-black p-10">
                            <p className="text-white font-bold text-8xl">Pick The Best Toy</p> <br />
                            <p className="text-white font-bold text-2xl">We offer Premium Services!!!</p> <br />
                            <Link className="bg-red-600 p-2 lg:p-3 font-bold text-white rounded-lg hover:bg-yellow-500" to={"/alltoys"}> <button>Discover</button></Link>
                        </div>
                        <a href="#slide4" className="btn btn-circle bg-sky-800 hover:bg-sky-500 text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-screen h-screen">
                    <img src="https://images.pexels.com/photos/9742547/pexels-photo-9742547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-1 right-1 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-sky-800 hover:bg-sky-500 text-white border-none">❮</a>
                        <div className="bg-gradient-to-r from-black p-10">
                            <p className="text-white font-bold text-8xl">Get a Bonus on First Order</p> <br />
                            <p className="text-white font-bold text-2xl">Best Offers For Regular Customers!!!</p> <br />
                            <Link className="bg-red-600 p-2 lg:p-3 font-bold text-white rounded-lg hover:bg-yellow-500" to={"/alltoys"}> <button>Discover</button></Link>
                        </div>
                        <a href="#slide1" className="btn btn-circle bg-sky-800 hover:bg-sky-500 text-white border-none">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;