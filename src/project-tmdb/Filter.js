import React from "react";

function Filter(props) {

    return (
        <div>
            <label htmlFor="selGenre">Filter by genre:</label>
            <select id="selGenre" defaultValue={''} onChange={props.handleChangeFilter} className="form-select">
                <option value={''}>All genres</option>
                <option value={18}>Drama</option>
                <option value={35}>Comedy</option>
                <option value={16}>Animation</option>
            </select>
        </div>
    )
}

export default Filter