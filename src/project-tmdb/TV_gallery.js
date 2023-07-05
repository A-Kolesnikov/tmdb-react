import React, { useEffect, useState } from 'react'

import Filter from './Filter';
import Search_bar from './Search_bar';
import { downloadGallery } from './getInfo';

import TV_unit from './TV_unit';

function TV_gallery(){

    const [titlesTV, setTitlesTV] = useState([])
    const [filter, setFilter] = useState('')
    const [searchRequest, setSearchRequest] = useState('')

    const urlTV = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
    const urlTVFiltered = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${filter}`//`https://api.themoviedb.org/3/discover/tv?include_genres=${filter}`
    const urlTVSearch = `https://api.themoviedb.org/3/search/tv?query=${searchRequest}&include_adult=false&language=en-US&page=1`

    const handleChangeFilter = (e) => {
        const queryElement = e.target.value
        setFilter(queryElement)
    }

    const handleSearch = (request) => {
        setSearchRequest(request)
    }

    useEffect( () =>{       //fetching default content
        downloadGallery(urlTV, setTitlesTV)
}, []);

useEffect(() => {       //fetching filtered content
    if (filter === ''){
        downloadGallery(urlTV, setTitlesTV)
    }else{
        downloadGallery(urlTVFiltered, setTitlesTV)
    }
}, [filter]
)

useEffect(() => {       //fetching searched content
    if (searchRequest ===''){
        downloadGallery(urlTV, setTitlesTV)
    } else{
        downloadGallery(urlTVSearch, setTitlesTV)
    }
}, [searchRequest]
)

    return !titlesTV.length ? <h1>Loading</h1> : (
        <div className='row d-flex justify-content-center'>
        <div className='col-10'>
            <div className='row  border'>
                <div className='col'>
                    <h1 className='row justify-content-center'>Movies Gallery</h1>
                    <div className='row'>
                        <div className='col-8 d-flex align-items-end'>
                            <div>
                            <Search_bar handleSearch={handleSearch} />
                            </div>
                        </div>
                        <div className='col-4'>
                            <Filter handleChangeFilter={handleChangeFilter} filter={filter} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                {titlesTV.map((element) => (<TV_unit key={element.id} title={element} />))}
            </div>
        </div>
    </div >
        
    )
}

export default TV_gallery