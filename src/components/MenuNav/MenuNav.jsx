import React from 'react';
import { RiHomeLine } from 'react-icons/ri'
import { FaClipboardList } from 'react-icons/fa'
import { CgMenuBoxed } from 'react-icons/cg'

const MenuNav = ({className}) => {
    const options = [{icon:<RiHomeLine/>,id:1},{icon:<FaClipboardList/>,id:2}, {icon:<CgMenuBoxed/>,id:3}]
    const listNav = options.map(option => (
            <div tabIndex={0} key={option.id} className='option'>
            <input id={option.id} type='radio' name='options'/>
            <label htmlFor={option.id}>{option.icon}</label>
            </div>
    
    ))
    return(
        <div className={className}>
            {listNav}
        </div>
    )
}

export { MenuNav };