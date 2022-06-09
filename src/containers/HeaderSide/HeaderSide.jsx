import React, {useContext} from 'react';
import { Logo } from '../../components/Logo/Logo';
import { MenuNav } from '../../components/MenuNav/MenuNav';
import { MenuProfile } from '../../components/MenuProfile/MenuProfile';
import { ProPlayercontext } from '../../context/ProPlayercontext';



const HeaderSide = () => {
  const {characters,loading}=useContext(ProPlayercontext);
  let numberRandom;
  let user;
  if(!loading){
    numberRandom= Math.floor(Math.random()*100)
    user = characters[numberRandom];
  }
  console.log(user)
  return(
      <div className="container-header">
        <Logo/>
        <MenuNav/>
        {user && <MenuProfile
            profile={user}
        /> }
      </div>
    )
}

export { HeaderSide };