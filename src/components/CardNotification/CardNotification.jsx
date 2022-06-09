import React from 'react'
import {ImMail} from 'react-icons/im';

const CardNotification = ({time,name}) => {
    
  return (
    <article>
            <div className='card-header'>
                <ImMail/>
                <span>MAIL</span>
            </div>
            <div className="card-content">
                <span className="name">{name}</span>
                <span className="time">{time}</span>
            </div>
        </article>
  )
}

export default CardNotification