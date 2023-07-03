import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TV_details_page(props) {

    const paramHook = useParams()
    const titleID = paramHook.id    //Why not paramHook.titleID ?!
    //const { titleID } = useParams() //not working

    const [titleTV, setTitleTV] = useState('')

    const fetch = require('node-fetch')
    const url = `https://api.themoviedb.org/3/tv/${titleID} `;
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
                await new Promise(resolve => setTimeout(resolve, 300))
                console.log(decode)
                setTitleTV(decode)
            } catch (err) {
                console.error('error' + err)
            }
        }
        getInfo(url)
    }, []);

        const unitName = titleTV.name ? titleTV.name : titleTV.title
        const imgPath = `https://image.tmdb.org/t/p/w500${titleTV.poster_path}`
        console.log('Its really'+titleID)
    return ! titleTV ? <h1>Loading</h1> : (
        <div className='row'>
            <img className='col-2' src={imgPath} alt='Title image' ></img>
            <div className='col-6'>
                <h2>{unitName}</h2>
                First time on air: {titleTV.first_air_date}
            </div>
        </div>
    )
}

export default TV_details_page