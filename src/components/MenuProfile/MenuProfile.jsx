import React from 'react';
import { RiFileList3Line } from 'react-icons/ri'

const MenuProfile = ({profile}) => {
    return(
        <div className="container-menu">
            <div tabIndex={0} className='container-button'>
                <input id='profile' type='radio' name='options'/>
                <label htmlFor='profile'><RiFileList3Line/></label>
            </div>
            <div className="container-image">
                <img src={profile.avatar} alt={profile.name}/>
            </div>
        </div>
    )
}

export { MenuProfile };