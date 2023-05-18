import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";

const PrivateRoutes = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();

    if(user) {
        return children;
    }
    return <Navigate state={{from: location}} to={"/login"} replacew></Navigate>
};

export default PrivateRoutes;