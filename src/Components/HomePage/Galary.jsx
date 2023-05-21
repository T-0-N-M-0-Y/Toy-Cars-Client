import { useEffect, useState } from "react";
import Photos from "./Photos";

const Galary = () => {

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch("https://assignment-11-car-toy-market-server.vercel.app/alldata")
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-10'>Showdown</h1>
            <h1 className='text-xl font-normal text-center mt-5'>Take a Look at our Collection</h1>
            <div className="grid grid-cols-5    gap-2 py-10 px-10">
                {
                    allData.map(data => <Photos key={data._id} data={data}></Photos>)
                }
            </div>
        </div>
    );
};

export default Galary;