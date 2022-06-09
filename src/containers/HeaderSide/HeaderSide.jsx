import React, {useContext} from 'react';
import { Logo } from '../../components/Logo/Logo';
import { MenuNav } from '../../components/MenuNav/MenuNav';
import { MenuProfile } from '../../components/MenuProfile/MenuProfile';
import { ProPlayercontext } from '../../context/ProPlayercontext';
import styles from '../../styles/containers/headerside.module.scss';



const HeaderSide = () => {
  const {characters,loading}=useContext(ProPlayercontext);
  let numberRandom;
  let user;
  if(!loading){
    numberRandom= Math.floor(Math.random()*100)
    user = characters[numberRandom];
  }
  return(
      <div className={styles.container}>
        <Logo
          className={styles.logo}
        />
        <MenuNav
          className={styles.menunav}
        />
        {user && <MenuProfile
            profile={user}
            className={styles.menuprofile}
        /> }
      </div>
    )
}

export { HeaderSide };