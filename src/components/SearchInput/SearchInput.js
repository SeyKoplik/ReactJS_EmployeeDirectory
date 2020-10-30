import React from "react";
import "./SearchInput.css";

function SearchInput(props) {
    return (
        <>
            <form className="form">
                <p>Please enter a search parameter for your directory to render an employee data list per your request </p>
                <input className="searchInputBox" type="text" name="search" placeholder="Search.." onChange={props.handleInputChange}/> <button className="searchInputBtn" onClick={() =>  props.handleFormSubmit()}>FIND!</button>
            </form>
        </>
    )
}

export default SearchInput;