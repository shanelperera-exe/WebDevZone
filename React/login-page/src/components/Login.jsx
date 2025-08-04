import React from "react";
import Input from "./Input";
import Button from "./Button";

function Login() {
    return (
        <form className="form">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Confirm Password"/>
            <Button type="submit" text="Register"/>
        </form>
    );
}

export default Login;