import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search_line(props) {
    const [searchValue, setSearchValue] = useState('')
    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className="row">
            <div className="input-group">
                <div className="form-outline">
                    <input type="text" placeholder="Search title by name" className="form-control" size={50} onChange={(e) => { handleChange(e) }}></input>
                </div>
                <button className="btn btn-primary" onClick={() => props.handleSearch(searchValue)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
        </div>
    )
}
export default Search_line