import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import TV_unit from './TV_unit';
import Filter from './Filter';
import Search_line from './Search_line';

function TV_gallery(){

    const [titlesTV, setTitlesTV] = useState([])
    const [filter, setFilter] = useState()
    const [searchRequest, setSearchRequest] = useState('')

    const fetch = require('node-fetch')
    const urlTV = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
    const urlTVFiltered = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${filter}`//`https://api.themoviedb.org/3/discover/tv?include_genres=${filter}`
    const urlTVSearch = `https://api.themoviedb.org/3/search/tv?query=${searchRequest}&include_adult=false&language=en-US&page=1`
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAwYTBmMWQ3ZjI4ZDcxOTFiOTFmZDczODdkMWE3ZCIsInN1YiI6IjY0OWFmYjFkN2UzNDgzMDBhY2MzOTdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.egwmn-oqHF-VC6_ifTiRFKpiiBvO0slCgTM8cotn3CY'
        }
    };

    const handleChangeFilter = (e) => {
        const queryElement = e.target.value
        setFilter(queryElement)
    }

    const handleSearch = (request) => {
        setSearchRequest(request)
    }
    
    async function getInfo(addr) {
        try {
            let response = await fetch(addr, options)
            let decode = await response.json()
            await new Promise(resolve => setTimeout(resolve, 500)) //server delay imitation
            setTitlesTV(decode.results)
        } catch (err) {
            console.error('error' + err)
        }
    }

    useEffect( () =>{

    getInfo(urlTV)
}, []);

useEffect(() => {
    if (filter === ''){
        getInfo(urlTV)
    }else{
        getInfo(urlTVFiltered)
    }
}, [filter]
)

useEffect(() => {
    if (searchRequest ===''){
        getInfo(urlTV)
    } else{
        getInfo(urlTVSearch)
    }
}, [searchRequest]
)

    return !titlesTV.length ? <h1>Loading</h1> : (
        <div className='container'>
            <div className='row'>
                <div className='col-7'>
                    <Search_line handleSearch={handleSearch} />
                </div>
                <div className='col-4'>
                    <Filter handleChangeFilter={handleChangeFilter} filter={filter} />
                </div>
            </div>
            <h1>TV-series gallery</h1>
            {titlesTV.map((element) => (<TV_unit key={element.id} title={element} />))}
        </div>
    )
}

export default TV_gallery