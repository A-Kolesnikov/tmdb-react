import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Mov_unit from './Mov_unit';
import Filter from './Filter';
import Search_line from './Search_line';

function Mov_gallery() {

    const [titlesMov, setTitlesMov] = useState([])
    const [filter, setFilter] = useState('')
    const [searchRequest, setSearchRequest] = useState('')

    const fetch = require('node-fetch')
    const urlMov = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const urlMovFiltered = `https://api.themoviedb.org/3/discover/movie?with_genres=${filter}`
    const urlMovSearch = `https://api.themoviedb.org/3/search/movie?query=${searchRequest}&include_adult=false&language=en-US&page=1`
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

    /*fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error' + err))*/ //Default request from TMDB

    async function getInfo(addr) {
        try {
            let response = await fetch(addr, options)
            let decode = await response.json()
            await new Promise(resolve => setTimeout(resolve, 500)) //server delay imitation
            setTitlesMov(decode.results)
            console.log(decode.results)
        } catch (err) {
            console.error('error' + err)
        }
    }
    useEffect(() => {
        getInfo(urlMov)
    }, []);

    useEffect(() => {
        if (filter === '') {
            getInfo(urlMov)
        } else {
            getInfo(urlMovFiltered)
        }
    }, [filter]
    )

    useEffect(() => {
        if (searchRequest === '') {
            getInfo(urlMov)
        } else {
            getInfo(urlMovSearch)
        }
    }, [searchRequest]
    )


    return !titlesMov.length ? <h1>Loading</h1> : (
        <div className='row'>
            <div className='col-m'>
            <div className='row'>
                <div className='col-7'>
                    <Search_line handleSearch={handleSearch} />
                </div>
                <div className='col-4'>
                    <Filter handleChangeFilter={handleChangeFilter} filter={filter} />
                </div>
            </div>
            <div className='row'>
            <h1 className=' text-center'>Movies Gallery</h1>
            {titlesMov.map((element) => (<Mov_unit key={element.id} title={element} />))}
            </div>
            </div>
        </div >
    )
}

export default Mov_gallery