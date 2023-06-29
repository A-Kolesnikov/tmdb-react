import '../App.css'
import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'


import Main_page from './Main_page'
import TV_gallery from './TV_gallery'
import Mov_gallery from './Mov_gallery'
import Mov_details_page from './Mov_details_page'
import Not_found from './Not_found'


function App(){
    //const [movID, setMovID] = useState('')

    return(
        
        <div className='container'>
            <header>
                <Link to='/'>Main page</Link>
                <span> </span>
                <Link to='/movies'>Movies</Link>
                <span> </span>
                <Link to='/tvShows'>TV-Shows</Link>
            </header>
            <Routes>
                <Route path="/" element={<Main_page />} />
                <Route path="/movies" element={<Mov_gallery /*setMovID={setMovID}*//>} />
                <Route path="/movies/:id" element={<Mov_details_page /*titleID={movID}*/ />} />
                <Route path="/tvShows" element={<TV_gallery />} />
                <Route path='*' element={<Not_found />} />
            </Routes>

    {/*<Mov_details_page titleID={569094}/>*/}
    {/*<Mov_gallery />*/}
        </div>
    )
}

export default App