import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">This is your employee list directory. Search and organize your employee database!</p>
            </div>
        </div>
    )
}

export default Header;