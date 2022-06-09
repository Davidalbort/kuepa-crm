import React, {useContext} from 'react';
import CallBook from '../../components/CallBook/CallBook';
import GroupSummary from '../../components/GroupSummary/GroupSummary';
import { Search } from '../../components/Search/Search';
import { Select } from '../../components/Select/Select';
import TaskPlan from '../../components/TaskPlan/TaskPlan';
import TodayPlan from '../../components/TodayPlan/TodayPlan';
import { useGetApi } from '../../hooks/useGetAPI';
import { ProPlayercontext } from '../../context/ProPlayercontext';
import styles from '../../styles/containers/homepage.module.scss';

const HomePage = ({data}) =>{
    const active = true;
    const {user}=useContext(ProPlayercontext);
    console.log(user)
    const API= 'https://api.opendota.com/api/heroes';
    const {characters}=useGetApi(API)
    return(
      <main className={styles.container}>
        <div className={styles.navigation}>
          <Search/>
          <Select/>

        </div>
        <div className={styles.porcent}>
          <div className={styles.title}>
            {user && <h1>{`Hola, ${user.name}`}</h1>}

          </div>
          <div className={styles.data}>
            <TaskPlan data={data}/>
            <GroupSummary data={data}/>

          </div>

        </div>
        <div className={styles.contact}>
          <CallBook
            active= {active}
            data = {characters}
          />
          <TodayPlan/>
        </div>
      </main>
    )
}

export { HomePage };