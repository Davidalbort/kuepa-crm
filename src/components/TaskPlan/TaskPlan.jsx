
import React from 'react';
import styles from '../../styles/components/taskplan.module.scss';

const TaskPlan = ({data}) => {
  return (
    <article className={styles.container}>
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
        <div className={styles.data}>
            <div className={styles.leads}>
              <span className={styles.subtitle}>Leads Obtenidos</span>
              <span className='subtitle-number'>{data.data.leads}/{data.data.totalLead}</span>
            </div>
            <div className={styles.leads}>
              <span className={styles.subtitle}>Leads Obtenidos</span>
              <span className='subtitle-number'>{data.data.callQueue}/{data.data.totalCalls}</span>
            </div>
            <div className={styles.leads}>
              <span className={styles.subtitle}>Leads Obtenidos</span>
              <span className='subtitle-number'>{data.data.registrationCompleted}/{data.data.totalRegistrations}</span>
            </div>
        </div>
    </article>
  )
}

export default TaskPlan

