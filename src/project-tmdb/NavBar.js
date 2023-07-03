import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    return (
        <div className='row'>
            <div className='col-1'>
                <Link to='/' >Main page</Link>
            </div>
            <div className='col-1'>
                <Link to='/movies'>Movies</Link>
            </div>
            <div className='col-1'>
                <Link to='/tvShows'>TV-Shows</Link>
            </div>
            
        </div>
    )
}
export default NavBar