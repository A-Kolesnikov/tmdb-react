import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Mov_details_page(props) {

    const paramHook = useParams()
    const titleID = paramHook.id
    //const { titleID } = useParams() //not working

    const [titleMov, setTitleMov] = useState('')

    const fetch = require('node-fetch')
    const url = `https://api.themoviedb.org/3/movie/${titleID} `;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAwYTBmMWQ3ZjI4ZDcxOTFiOTFmZDczODdkMWE3ZCIsInN1YiI6IjY0OWFmYjFkN2UzNDgzMDBhY2MzOTdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.egwmn-oqHF-VC6_ifTiRFKpiiBvO0slCgTM8cotn3CY'
        }
    };

    useEffect(() => {
        async function getInfo(addr) {
            try {
                let response = await fetch(addr, options)
                let decode = await response.json()
                await new Promise(resolve => setTimeout(resolve, 1000))
                console.log(decode)
                setTitleMov(decode)
            } catch (err) {
                console.error('error' + err)
            }
        }
        getInfo(url)
    }, []);

        const unitName = titleMov.name ? titleMov.name : titleMov.title
        const imgPath = `https://image.tmdb.org/t/p/w500${titleMov.poster_path}`
        console.log('Its really'+titleID)
    return ! titleMov ? <h1>Loading</h1> : (
        <div className='row'>
            <img className='col-2' src={imgPath} alt='Title image' ></img>
            <div className='col-6'>
                <h2>{unitName}</h2>
                {titleMov.release_date}
            </div>
        </div>
    )
}

export default Mov_details_page