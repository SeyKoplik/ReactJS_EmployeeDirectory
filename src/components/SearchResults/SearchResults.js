import React from "react";
import "./SearchResults.css";


function SearchResults(props) {
    return (
        <>
        <tbody>
            <tr>
                <td><img className="thumbnail" src={props.image} /></td>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td><a href={props.email}>{props.email}</a></td>
                <td>{props.birthday}</td>
            </tr>
        </tbody>
        </>
    )
}

export default SearchResults;