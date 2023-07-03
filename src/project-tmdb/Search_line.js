import React, { useState } from "react";

function Search_line(props){
    const [searchValue, setSearchValue] = useState('')
    const handleChange = (e)=>{
        setSearchValue(e.target.value)
    }


    return(
        <div>
            <button onClick={()=>props.handleSearch(searchValue)}>Search</button>
            <input type="text" placeholder="Input title name" onChange={(e)=>{handleChange(e)}}></input>
        </div>
    )
}
export default Search_line