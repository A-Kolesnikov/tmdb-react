import React from 'react'
import { Link } from 'react-router-dom'

function TV_unit(props) {

    const series = props.title
    const unitName = series.name ? series.name : series.title
    const imgPath = `https://image.tmdb.org/t/p/w300${series.poster_path}`
    return (
            <div className="card  mb-3">
                <div className='row g-0'>
                    <div className='col-md-3'>
                        <Link to={`/tvShows/${series.id}`} >
                            <img className="img-fluid rounded-start" src={imgPath} alt='Title image' ></img>
                        </Link>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <Link to={`/tvShows/${series.id}`} >
                                <h5 className="card-title">{unitName}</h5>
                            </Link>
                            <p>{series.overview}</p>
                            <p><b>First air:</b> {series.first_air_date}</p>
                            <p><b>User score</b> {series.vote_average * 10}%</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TV_unit