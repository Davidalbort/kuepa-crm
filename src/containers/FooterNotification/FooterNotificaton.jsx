import React from 'react'
import CardNotification from '../../components/CardNotification/CardNotification';
import { useGetApi } from '../../hooks/useGetAPI';
import styles from '../../styles/containers/footer.module.scss'

const FooterNotificaton = () => {
    const time = ' 8min ago'
    const API= 'https://api.opendota.com/api/proPlayers';
    const {characters,loading}=useGetApi(API);
    console.log(characters);
  return (
    <footer className={styles.container}>
        {!characters && <h1>Loading...</h1>}
        { characters && characters.map(name => (
        <CardNotification
            name={name.name}
            key={`notification ${name.account_id}`}
            time={time}
        />
        ))}

    </footer>
  )
}

export default FooterNotificaton