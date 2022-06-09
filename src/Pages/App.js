import { useGetProPlayers } from '../hooks/useGetProPlayers';
import { ProPlayercontext } from '../context/ProPlayercontext';
import AppUI from './AppUI';

function App() {
  
  // const API= 'https://api.opendota.com/api/heroes';
  
  // const {characters,error,loading,setLoading}=useGetApi(API);

  // console.log(characters)
  const getProPlayers = useGetProPlayers();
 
  return (
    <ProPlayercontext.Provider value={getProPlayers}>
      <div className="App">
        <AppUI/>
      </div>
    </ProPlayercontext.Provider>
  );
}

export default App;
