import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <div>
        <Link to="/signup">Sign Up</Link>
         <p>or</p>
        <Link to="/login">Login</Link>
    </div>
);