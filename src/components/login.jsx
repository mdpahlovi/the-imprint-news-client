import React from "react";
import Input from "./Input";

const Login = () => {
    return (
        <form className="w-full h-screen flex justify-center items-center">
            <Input type={"password"} name={"password"} text={"Password"} />
            <Input type={"text"} name={"fastName"} text={"Fast Name"} />
            <Input type={"text"} name={"lastName"} text={"Last Name"} />
            <Input type={"email"} name={"email"} text={"Email"} />
        </form>
    );
};

export default Login;
