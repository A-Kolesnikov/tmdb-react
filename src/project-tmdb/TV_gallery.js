import React, { useEffect, useState } from 'react'
import Title_unit from './Title_unit';

function TV_gallery(){

    const [titlesTV, setTitlesTV] = useState([])

    const fetch = require('node-fetch')
    const urlTV = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
        method: 'GET',
        headers:{
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAwYTBmMWQ3ZjI4ZDcxOTFiOTFmZDczODdkMWE3ZCIsInN1YiI6IjY0OWFmYjFkN2UzNDgzMDBhY2MzOTdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.egwmn-oqHF-VC6_ifTiRFKpiiBvO0slCgTM8cotn3CY'
        }
    };

    /*fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error' + err))*/
    useEffect( () =>{
    async function getInfo(addr){
        try{
            let response = await fetch(addr, options)
            let decode = await response.json()
            await new Promise(resolve => setTimeout(resolve, 1000)) 
            console.log (decode.results)
            setTitlesTV(decode.results)
        } catch(err){
            console.error('error' + err)
        }
    }
    getInfo(urlTV)
}, []);
    

    return !titlesTV.length ? <h1>Loading</h1> : (
        <div className='container'>
            TV content:
            {titlesTV.map((element) => (<Title_unit key={element.id} title={element} />))}
        </div>
    )
}

export default TV_gallery