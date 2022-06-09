import React from 'react'
import {ImMail} from 'react-icons/im';
import styles from '../../styles/components/cardnotification.module.scss'

const CardNotification = ({time,name}) => {
    
  return (
    <article className={styles.container}>
            <div className={styles.title}>
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