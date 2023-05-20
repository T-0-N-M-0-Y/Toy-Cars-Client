import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {

    const targetToy = useLoaderData();
    console.log(targetToy);

    return (
        <div>
            
        </div>
    );
};

export default UpdateToy;