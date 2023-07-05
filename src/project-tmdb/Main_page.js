import React, { useEffect, useState } from 'react'
import Mov_unit_vertical from './Mov_unit_vertical';

function Main_page() {

    const [bestMov, setBestMov] = useState([])

    const fetch = require('node-fetch')
    const urlBestMov = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAwYTBmMWQ3ZjI4ZDcxOTFiOTFmZDczODdkMWE3ZCIsInN1YiI6IjY0OWFmYjFkN2UzNDgzMDBhY2MzOTdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.egwmn-oqHF-VC6_ifTiRFKpiiBvO0slCgTM8cotn3CY'
        }
    };

    async function getInfo(addr) {
        try {
            let response = await fetch(addr, options)
            let decode = await response.json()
            await new Promise(resolve => setTimeout(resolve, 500)) //server delay imitation
            setBestMov(decode.results)
        } catch (err) {
            console.error('error' + err)
        }
    }
    useEffect(() => {
        getInfo(urlBestMov)
    }, []);

    return !bestMov.length ? <h1>Loading</h1> : (
        <div className='row d-flex justify-content-center'>
            <div className='col-10'>
                <h2 className='text-center'>Top Rated Movies</h2>
                <div className='d-flex p-3 text-center' style={{ overflowX: "auto" }}>
                    <div className='d-flex flex-row'>
                        {bestMov.map((element) => (<Mov_unit_vertical key={element.id} title={element} />))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main_page