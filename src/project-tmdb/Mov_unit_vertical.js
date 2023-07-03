import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Mov_unit_vertical(props) {

    const title = props.title
    const unitName = title.name ? title.name : title.title
    const imgPath = `https://image.tmdb.org/t/p/w500${title.poster_path}`
    return (

        <div>

            <div className="card" style={{ width: "18rem" }}>
                <Link to={`/movies/${title.id}`} >
                    <img className="card-img-top" src={imgPath} alt='Title image' ></img>
                </Link>
                <div className="card-body" style={{ height: "80px" }}>
                    <h5 className="card-title ">{unitName}</h5>
                </div>
            </div>
        </div>
    )
}

export default Mov_unit_vertical