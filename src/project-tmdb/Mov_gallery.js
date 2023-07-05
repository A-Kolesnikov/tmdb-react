import React, { useEffect, useState } from 'react'

import Filter from './Filter';
import Search_bar from './Search_bar';
import {downloadGallery} from './getInfo';

import Mov_unit from './Mov_unit';

function Mov_gallery() {
    const [titlesMov, setTitlesMov] = useState([])
    const [filter, setFilter] = useState('')
    const [searchRequest, setSearchRequest] = useState('')

    const urlMov = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const urlMovFiltered = `https://api.themoviedb.org/3/discover/movie?with_genres=${filter}`
    const urlMovSearch = `https://api.themoviedb.org/3/search/movie?query=${searchRequest}&include_adult=false&language=en-US&page=1`

    const handleChangeFilter = (e) => {
        const queryElement = e.target.value
        setFilter(queryElement)
    }

    const handleSearch = (request) => {
        setSearchRequest(request)
    }

    useEffect(() => {       //fetching default content
        downloadGallery(urlMov, setTitlesMov)
    }, []);

    useEffect(() => {       //fetching filtered content
        if (filter === '') {
            downloadGallery(urlMov, setTitlesMov)
        } else {
            downloadGallery(urlMovFiltered, setTitlesMov)
        }
    }, [filter]
    )

    useEffect(() => {       //fetching searched content
        if (searchRequest === '') {
            downloadGallery(urlMov, setTitlesMov)
        } else {
            downloadGallery(urlMovSearch, setTitlesMov)
        }
    }, [searchRequest]
    )

    return !titlesMov.length ? <h1>Loading</h1> : (
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
                    {titlesMov.map((element) => (<Mov_unit key={element.id} title={element} />))}
                </div>
            </div>
        </div >
    )
}

export default Mov_gallery