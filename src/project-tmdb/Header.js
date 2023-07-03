import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="d-flex
                justify-content-center
                allign-items-center w-100
                p-3 header text-uppercase
                ">
                    {/*icon({name: 'user', style: 'solid'})*/}
                    <FontAwesomeIcon icon={faHouse} />
                    <FontAwesomeIcon icon={faVideo} size="2xl" style={{color: "#682606",}} />

                    Tmdb
                </div>
            </div>
        </div>
    )
}
export default Header