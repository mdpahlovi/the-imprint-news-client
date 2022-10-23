import React from "react";
import Input from "./Reusable/Input";
import { ImGoogle, ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";

const Signin = () => {
    return (
        <section className="form-container content-gap-y">
            <form className="content-gap-y">
                <Input type={"email"} name={"email"} text={"Email"} />
                <Input type={"password"} name={"password"} text={"Password"} />
                <div className="flex justify-between items-center">
                    <label className="label cursor-pointer">
                        <span className="mr-2">Remember me</span>
                        <input type="checkbox" className="checkbox checkbox-primary" />
                    </label>
                    <a className="link" href="/">
                        Forgot password?
                    </a>
                </div>
                <input type={"submit"} value="Sign In" className="btn btn-primary" />
            </form>
            <div className="line-x">
                <p className="mx-2">Or Sign in with</p>
            </div>
            <div className="content-gap-x justify-between">
                <button className="btn btn-outline btn-primary gap-1.5">
                    <ImGoogle />
                    Google
                </button>
                <button className="btn btn-outline btn-primary gap-1.5">
                    <BsFacebook />
                    Facebook
                </button>
                <button className="btn btn-outline btn-primary gap-1.5">
                    <ImGithub />
                    Github
                </button>
            </div>
            <p className="text-center">
                Don't have an account?
                <a href="/" className="ml-1.5 font-bold uppercase underline">
                    Sign Up Now
                </a>
            </p>
        </section>
    );
};

export default Signin;
