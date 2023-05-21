import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-sky-800 text-white">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Speacial Offers</a>
                    <a className="link link-hover">Free Delivary</a>
                    <a className="link link-hover">Reasonable Price</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-sky-800 text-white border-base-300">
                <div className="items-center grid-flow-col">
                    <img className="w-0 h-0 lg:h-16 lg:w-16 rounded-full" src="https://w7.pngwing.com/pngs/700/802/png-transparent-hot-wheels-model-car-die-cast-toy-hot-wheels-logo-car-smiley.png" alt="" />
                    <p>TOY CARS Ltd. <br />Providing Services since 1992</p>
                </div>
                <p className="flex items-center">Copyright © 2023 - All right reserved by TOY CARS Ltd.</p>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link><FaFacebook></FaFacebook></Link>
                        <Link><FaTwitter></FaTwitter></Link>
                        <Link><FaInstagram></FaInstagram></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;