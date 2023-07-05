import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { downloadTitle } from './getInfo'

function Mov_details_page() {

    const paramHook = useParams()
    const titleID = paramHook.id    //Why not paramHook.titleID ?!
    //const { titleID } = useParams() //not working

    const [titleMov, setTitleMov] = useState('')

    const url = `https://api.themoviedb.org/3/movie/${titleID} `;

    useEffect(() => {
        downloadTitle(url, setTitleMov)
    }, []);

    const unitName = titleMov.name ? titleMov.name : titleMov.title
    const imgPath = `https://image.tmdb.org/t/p/w500${titleMov.poster_path}`
    return !titleMov ? <h1>Loading</h1> : (
        <div className='row d-flex justify-content-center'>
            <div className='col-10'>
                <div className='row'>
                    <img className='col-2' src={imgPath} alt='Title image' ></img>
                    <div className='col-6'>
                        <h2>{unitName}</h2>
                        <p><i>{titleMov.tagline}</i></p>
                        <p><a href={titleMov.homepage} target="_blank">Title homepage</a></p>
                        <p><b>Release date:</b> {titleMov.release_date}</p>
                        <p><b>Overview:</b> {titleMov.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mov_details_page