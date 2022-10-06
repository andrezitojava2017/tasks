import React from "react";
import { Link } from "react-router-dom";

const LinkHome = ()=>{
    return (
        <div>
            <Link to='/'>
                <span>Principal</span>
            </Link>

        </div>
    );
}
export default LinkHome;