import React from 'react';
import {BsCheckCircleFill} from 'react-icons/bs';
import {MdOutlineCall} from 'react-icons/md';
import {MdOutlineMessage} from 'react-icons/md';
import styles from '../../styles/components/callbook.module.scss'

const CallBook = ({data,active}) => {
  const contacList = data.map((contac) => (
    <div className={styles.name} key={contac.id}>
      <div className="callbook-name">
      {contac.localized_name}

      </div>
      <div className={styles.message}>
        <span className="message">Llamar</span>
        <span className="submessage">descuento temporada</span>
      </div>
      <div className="callbook-icons">
        <BsCheckCircleFill className={`icon-check ${active && 'icon-check--active' }` }onClick={() => !active}/>
        <MdOutlineCall/>
        <MdOutlineMessage/>
      </div>

    </div>
  ))
  return (
  <section className={styles.container}>
    <div className="callbook-title">
      <h3>Conexiones de agenda para hoy</h3>
    </div>
    <div className={styles.list}>
      {contacList}
    </div>

  </section>
  )
}

export default CallBook