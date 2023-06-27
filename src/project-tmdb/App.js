import '../App.css'
import React from 'react'

function App(){
    const fetch = require('node-fetch')

    const url = 'https://api.themoviedb.org/3/account/20072455'//'https://api.themoviedb.org/3/authentication'
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

    async function getInfo(){
        try{
            let response = await fetch(url, options)
            let result = await response.json()
            console.log(result)
        } catch(err){
            console.error('error' + err)
        }
    }
    getInfo()

    return(
        <div className='container'>
            Hello friend!
        </div>
    )
}

export default App