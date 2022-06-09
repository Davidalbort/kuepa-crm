
import React from 'react'

const TaskPlan = ({data}) => {
  return (
    <article className='container-taskplan'>
        <div className='container-porcentual'>
            <div>
                <div className='wrapper-circle-percentual'>
                    <div className='circle-border'></div>
                    <div className='circle-border-inset'>
                        <span className='percentual-p'>{data.data.leads/data.data.totalLead*100}%</span>
                    </div>
                </div>

            </div>
        </div>
        <div className='container-data'>
            <div className='data-leads'>
              <span className='subtitle-p'>Leads Obtenidos</span>
              <span className='subtitle-number'>{data.data.leads}/{data.data.totalLead}</span>
            </div>
            <div className='data-llamadas'>
              <span className='subtitle-p'>Leads Obtenidos</span>
              <span className='subtitle-number'>{data.data.callQueue}/{data.data.totalCalls}</span>
            </div>
            <div className='data-registration'>
              <span className='subtitle-p'>Leads Obtenidos</span>
              <span className='subtitle-number'>{data.data.registrationCompleted}/{data.data.totalRegistrations}</span>
            </div>
        </div>
    </article>
  )
}

export default TaskPlan

