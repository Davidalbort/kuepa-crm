import { useGetApi } from "./useGetAPI";


const useGetProPlayers = () => {
    const API= 'https://api.opendota.com/api/proPlayers';
    const {characters,loading,error}=useGetApi(API);
    let user;
    if(!loading){
      const numberRandom= Math.floor(Math.random()*100);
      user = characters[numberRandom];
    }
    return {characters,loading,error,user}
}

export { useGetProPlayers };