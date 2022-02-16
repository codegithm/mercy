import React from 'react';
import './Loader.css'
const Loader = () =>{
    return(
        <div className='loader-cont'>
            <div className='loader-logo'>
                <img src="./Untitled-1-01.png" />
            </div>
            <div id="load">
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
            </div>
        </div>
    )
}

export default Loader;