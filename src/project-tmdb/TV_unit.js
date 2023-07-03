import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function TV_unit(props) {
    
    const title = props.title
    const unitName = title.name ? title.name : title.title
    const imgPath = `https://image.tmdb.org/t/p/w500${title.poster_path}`
    return (
            <div className="card mb-3" style={{ width: "800px" }}>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <Link to={`/tvShows/${title.id}`} >
                            <img className="card-img-top" src={imgPath} alt='Title image' ></img>
                        </Link>
                    </div>
                    <div className='col-md-7'>
                        <div className='card-body'>
                        <Link to={`/tvShows/${title.id}`} >
                        <h5 className="card-title">{unitName}</h5>
                        </Link>
                            
                            <p>{title.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TV_unit