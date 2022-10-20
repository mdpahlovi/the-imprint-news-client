import React from "react";

const Input = ({ type, name, text }) => {
    const handelLabel = (event) => {
        const label = event.target.nextSibling;
        if (event.target.value) {
            label.classList.add("label-top");
        } else {
            label.classList.remove("label-top");
        }
    };
    return (
        <div onBlur={handelLabel} className="relative">
            <input type={type} name={name} className="input-field border-white" />
            <label htmlFor={name} className="input-label">
                {text}
            </label>
        </div>
    );
};

export default Input;
