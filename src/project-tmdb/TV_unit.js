import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function TV_unit(props) {
    
    const title = props.title
    const unitName = title.name ? title.name : title.title
    const imgPath = `https://image.tmdb.org/t/p/w500${title.poster_path}`
    return (
        <div className='row'>
            <Link to={`/tvShows/${title.id}`} >
                <img className="col-2" src={imgPath} alt='Title image' ></img>
            </Link>
            <div className='col-6'><h2>{unitName}</h2></div>
        </div>
    )
}

export default TV_unit