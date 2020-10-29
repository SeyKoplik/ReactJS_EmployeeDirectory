import React from "react";
import "./SearchInput.css";

function SearchInput() {
    return (
        <>
            <form className="form">
                <p>Please enter a search parameter for your directory to render an employee data list per your request </p>
                <input className="searchInputBox" type="text" name="search" placeholder="Search.." /> <button className="searchInputBtn">FIND!</button>
            </form>
        </>
    )
}

export default SearchInput;