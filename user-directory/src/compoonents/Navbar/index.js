import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand m-auto" to="/">
                <h5 style={{fontFamily: "Times New Roman, Times, serif"}} className="text">Employee Directory</h5>
        </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className={
                            window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"
                            }
                        >
                            <h5 className="text" style={{fontFamily: "Times New Roman, Times, serif"}}>Directory</h5>
                        </Link>
                    </li>
                  
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;