import React, {useContext} from 'react';
import CallBook from '../../components/CallBook/CallBook';
import GroupSummary from '../../components/GroupSummary/GroupSummary';
import { Search } from '../../components/Search/Search';
import { Select } from '../../components/Select/Select';
import TaskPlan from '../../components/TaskPlan/TaskPlan';
import TodayPlan from '../../components/TodayPlan/TodayPlan';
import { useGetApi } from '../../hooks/useGetAPI';
import { ProPlayercontext } from '../../context/ProPlayercontext';

const HomePage = ({data}) =>{
    const active = true;
    const {user}=useContext(ProPlayercontext);
    console.log(user)
    const API= 'https://api.opendota.com/api/heroes';
    const {characters}=useGetApi(API)
    return(
      <main className="container-homepage">
        <Search/>
        <Select/>
          {user && <h1>{`Hola, ${user.name}`}</h1>}
        <TaskPlan data={data}/>
        <GroupSummary data={data}/>
        <CallBook
          active= {active}
          data = {characters}
        />
        <TodayPlan/>
      </main>
    )
}

export { HomePage };