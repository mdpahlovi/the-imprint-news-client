import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import Input from "./Reusable/Input";

const Signup = () => {
    const { createUser } = useContext(AuthContext);

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.log(error));
    };

    return (
        <section className="form-container content-gap-y h-screen justify-center">
            <form onSubmit={handelSubmit} className="content-gap-y">
                <div className="content-gap-x justify-between">
                    <Input type={"text"} name={"fastName"} text={"Fast Name"} />
                    <Input type={"text"} name={"lastName"} text={"Last Name"} />
                </div>
                <Input type={"email"} name={"email"} text={"Email"} />
                <Input type={"password"} name={"password"} text={"Password"} />
                <label className="label justify-start cursor-pointer">
                    <input type="checkbox" className="checkbox checkbox-primary" />
                    <p className="ml-2">
                        I agree to the
                        <a className="ml-2 underline" href="/">
                            Terms & Conditions
                        </a>
                    </p>
                </label>
                <input type={"submit"} value="Sign Up" className="btn btn-primary" />
            </form>
            <p className="text-center">
                If you already a user?
                <Link to="/signin" className="ml-1.5 font-bold uppercase underline">
                    Sign In Now
                </Link>
            </p>
        </section>
    );
};

export default Signup;
