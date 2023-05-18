import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, SetLoading] = useState([])

    const submitUser = (email, password) => {
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const logIn = (email, password) => {
        SetLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        SetLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, presentUser => {
            setUser(presentUser);
            console.log(presentUser);
            SetLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authData = {
        user,
        loading,
        submitUser,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;