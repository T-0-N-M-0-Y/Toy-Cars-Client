const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://images.pexels.com/photos/163696/toy-car-toy-box-mini-163696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-sm rounded-lg shadow-2xl"  data-aos="fade-up-right"/>
                    <div data-aos="fade-right">
                        <h1 className="text-xl font-bold">About Us</h1>
                        <h1 className="text-5xl font-bold">We provide & offer premium service</h1>
                        <p className="py-6">Our area of practice is quite wide: toy production, custom-made toys for every age, toy brand promotion, playrooms design with equipment, and of course kids camps and events!
                        </p>
                        <p>Contact us today and get a free consultation on any product we offer. Join our community for updates</p>
                        <button className="btn btn-primary mt-10">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;