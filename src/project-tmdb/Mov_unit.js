import React from 'react'
import { Link } from 'react-router-dom'

function Mov_unit(props) {

    const title = props.title
    const unitName = title.name ? title.name : title.title
    const imgPath = `https://image.tmdb.org/t/p/w300${title.poster_path}`
    return (

        <div className="card  mb-3">
            <div className='row g-0'>
                <div className='col-md-3'>
                    <Link to={`/movies/${title.id}`} >
                        <img className="img-fluid rounded-start" src={imgPath} alt='Title image' ></img>
                    </Link>
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <Link to={`/movies/${title.id}`} >
                            <h5 className="card-title">{unitName}</h5>
                        </Link>
                        <p>{title.overview}</p>
                        <p><b>Release date:</b> {title.release_date}</p>
                        <p><b>User score</b> {title.vote_average * 10}%</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Mov_unit