import React from 'react'
import { HeaderSide } from '../containers/HeaderSide/HeaderSide';
import { HomePage } from '../containers/HomePage/HomePage';
import FooterNotificaton from '../containers/FooterNotification/FooterNotificaton';

const AppUI = () => {
    const overview ={
        data: {
          id: '1',
          name: 'David',
          lastName: 'Alba',
          leads: 50,
          totalLead: 100,
          registrationCompleted: 10,
          totalRegistrations: 20,
          callQueue: 50,
          totalCalls: 100,
          leadsGroup: 200,
          totalLeadsGroup: 400,
          registrationsCompletedGroup: 50,
          totalRegistrationsGroup: 100,
        }
    }
  return (
    <div className="AppUI">
        <HeaderSide/>
        <HomePage
          data= {overview}
        />
        <FooterNotificaton/>
    </div>
  )
}

export default AppUI