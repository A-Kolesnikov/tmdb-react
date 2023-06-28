import '../App.css'
import React from 'react'
import TV from './TV'

function App(){
    const fetch = require('node-fetch')

    const url = 'https://api.themoviedb.org/3/account/20072455'//'https://api.themoviedb.org/3/authentication'
    const urlMov = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
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
    async function getInfo(addr){
        try{
            let response = await fetch(addr, options)
            let result = await response.json()
            console.log (result)
        } catch(err){
            console.error('error' + err)
        }
    }

    getInfo(urlMov)

    return(
        <div className='container'>
            Hello friend!
        </div>
    )
}

export default App