import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { downloadTitle } from './getInfo'

function TV_details_page() {

    const paramHook = useParams()
    const titleID = paramHook.id    //Why not paramHook.titleID ?!
    //const { titleID } = useParams() //not working

    const [titleTV, setTitleTV] = useState('')

    const url = `https://api.themoviedb.org/3/tv/${titleID} `;

    useEffect(() => {
        downloadTitle(url, setTitleTV)
    }, []);

    const unitName = titleTV.name ? titleTV.name : titleTV.title
    const imgPath = `https://image.tmdb.org/t/p/w500${titleTV.poster_path}`
    return !titleTV ? <h1>Loading</h1> : (
        <div className='row  d-flex justify-content-center'>
            <div className='col-10'>
                <div className='row'>
                    <img className='col-2' src={imgPath} alt='Title image' ></img>
                    <div className='col-6'>
                        <h2>{unitName}</h2>
                        <p><i>{titleTV.tagline}</i></p>

                        <p><b>First air:</b> {titleTV.first_air_date}</p>
                        {titleTV.overview ? (<p><b>Overview:</b> {titleTV.overview}</p>) : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TV_details_page