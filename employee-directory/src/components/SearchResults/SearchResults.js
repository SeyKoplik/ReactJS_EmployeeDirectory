import React from "react";
import "./SearchResults.css";

function SearchResults() {
    return (
        <>
            <thead className="tableHead">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Mark Andrews</td>
                    <td>(888) 888-8888</td>
                    <td>email@email.com</td>
                    <td>02/22/78</td>
                </tr>
                <tr>
                    <td scope="row">2</td>
                    <td>Sophie Tillen</td>
                    <td>(888) 888-8888</td>
                    <td>abc@abc.com</td>
                    <td>08/23/86</td>
                </tr>
            </tbody>
        </>
    )
}

export default SearchResults;