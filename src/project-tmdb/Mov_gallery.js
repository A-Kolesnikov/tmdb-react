import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Title_unit from './Title_unit';


function Mov_gallery({ setMovID }) {

    const [titlesMov, setTitlesMov] = useState([])
    const navigate = useNavigate()

    const fetch = require('node-fetch')
    const urlMov = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAwYTBmMWQ3ZjI4ZDcxOTFiOTFmZDczODdkMWE3ZCIsInN1YiI6IjY0OWFmYjFkN2UzNDgzMDBhY2MzOTdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.egwmn-oqHF-VC6_ifTiRFKpiiBvO0slCgTM8cotn3CY'
        }
    };

    /*fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error' + err))*/
    useEffect(() => {
        async function getInfo(addr) {
            try {
                let response = await fetch(addr, options)
                let decode = await response.json()
                await new Promise(resolve => setTimeout(resolve, 1000))
                console.log(decode.results)
                setTitlesMov(decode.results)
            } catch (err) {
                console.error('error' + err)
            }
        }
        getInfo(urlMov)
    }, []);

    const handleTitleClick = (titleID) => {
        /*setMovID(id);*/
        navigate(`/movies/${titleID}`);
    };

    return ! titlesMov.length ? <h1>Loading</h1> : (
        <div className='container'>
            Movie content:
            
            {titlesMov.map((element) => (<Title_unit key={element.id} title={element} handleClick={() => handleTitleClick(element.id)} />))}
        </div>
    )
}

export default Mov_gallery