import '../App.css'
import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'


import Main_page from './Main_page'
import TV_gallery from './TV_gallery'
import Mov_gallery from './Mov_gallery'
import Mov_details_page from './Mov_details_page'
import TV_details_page from './TV_details_page'
import Not_found from './Not_found'
import Header from './Header'
import Search_line from './Search_line'
import NavBar from './NavBar'
import Footer from './Footer'


function App(){

    return(
        
        <div className='container'>
            <header>
            <Header />
            <NavBar />

            </header>
            <Routes>
                <Route path="/" element={<Main_page />} />
                <Route path="/movies" element={<Mov_gallery/>} />
                <Route path="/movies/:id" element={<Mov_details_page />} />
                <Route path="/tvShows" element={<TV_gallery />} />
                <Route path="/tvShows/:id" element={<TV_details_page />} />
                <Route path='*' element={<Not_found />} />
            </Routes>
            <Footer className="foot" />
        </div>
    )
}

export default App