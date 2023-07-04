import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search_line(props){
    const [searchValue, setSearchValue] = useState('')
    const handleChange = (e)=>{
        setSearchValue(e.target.value)
    }

    return(
        <div>
            <button onClick={()=>props.handleSearch(searchValue)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <input type="text" placeholder="Input title name" onChange={(e)=>{handleChange(e)}}></input>
        </div>
    )
}
export default Search_line