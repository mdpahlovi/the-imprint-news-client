import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const user = { name: "Pahlovi" };
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    };
    const authInfo = { user, createUser };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
