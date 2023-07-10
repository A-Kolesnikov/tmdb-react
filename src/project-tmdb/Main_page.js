import React, { useEffect, useState } from 'react'
import Mov_unit_vertical from './Mov_unit_vertical';

import {downloadGallery} from './getInfo';

function Main_page() {

    const [bestMov, setBestMov] = useState([])

    const urlBestMov = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

    useEffect(() => {
        downloadGallery(urlBestMov, setBestMov)
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