import React from 'react'

const GroupSummary = ({data}) => {
  return (
    <article className='container-groupsummary'>
      <h3>Meta grupal</h3>
      <div className='groupsummary-leads'>
        <div className="leads-data">
          <span className='subtitle-p'>Leads Obtenidos</span>
          <span className='subtitle-number'>{data.data.leadsGroup}/{data.data.totalLeadsGroup}</span>
        </div>
        <div className="lead-porcentual">
          <div className='line-back'></div>
          <div className='line-gradient'></div>
        </div>
      </div>
      <div className='groupsummary-registration'>
        <div className="registration-data">
          <span className='subtitle-p'>Matriculas Realizadas</span>
          <span className='subtitle-number'>{data.data.registrationsCompletedGroup}/{data.data.totalRegistrationsGroup}</span>
        </div>
        <div className="registration-porcentual">
          <div className='line-back'></div>
          <div className='line-gradient'></div>
        </div>
      </div>
    
    </article>
  )
}

export default GroupSummary

// const overview ={

//     data: {
//       id: '1',
//       name: 'David',
//       lastName: 'Alba',
//       leads: 50,
//       totalLead: 100,
//       registrationCompleted: 10,
//       totalRegistrations: 20,
//       callQueue: 50,
//       totalCalls: 100,
//       leadsGroup: 200,
//       totalLeadsGroup: 400,
//       registrationsCompletedGroup: 50,
//       totalRegistrationsGroup: 100,
//     }
//   }