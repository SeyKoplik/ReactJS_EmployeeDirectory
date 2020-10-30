import React from "react";
import "./TableHeader.css";


function TableHeader(props) {
    return (
        <>
          <thead className="tableHead">
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">Employee Name <i className="fas fa-sort fa-lg" onClick={() => props.handleSortClick()}></i></th>
              <th scope="col">Telephone #</th>
              <th scope="col">Email Address</th>
              <th scope="col">Birthday</th>
            </tr>
          </thead>
        </>
    )
}

export default TableHeader;

