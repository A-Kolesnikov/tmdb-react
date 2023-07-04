import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faTv } from '@fortawesome/free-solid-svg-icons';

function NavBar() {

    return (
        <div className='navBar d-flex sticky-top'>
            <div className='col-2'>
                <Link to='/' ><FontAwesomeIcon icon={faHouse} size="xl" /> Main page</Link>
            </div>
            <div className='col-2'>
                <Link to='/movies'><FontAwesomeIcon icon={faVideo} size="xl" /> Movies</Link>
            </div>
            <div className='col-2'>
                <Link to='/tvShows'><FontAwesomeIcon icon={faTv} size="xl" /> TV-Shows</Link>
            </div>
            
        </div>
    )
}
export default NavBar