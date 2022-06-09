import React from 'react';
import SummaryPlan from '../SummaryPlan/SummaryPlan';
import {IoIosArrowForward} from 'react-icons/io';


const TodayPlan = () => {
  const informations = [{name:'Leads de primer contacto',calls:15, messages:15},{name:'Leads por confirmar cita',calls:15, messages:15},{name:'Leads de última intento',calls:15, messages:15}];
  return (
    <div>
        <div>
            <h3>Tu plan de hoy</h3>
            <div>
                <span>Ir a la gestión de llamadas</span>
                <IoIosArrowForward/>
            </div>
        </div>
        {informations.map((information) => (
            <SummaryPlan
                name={information.name}
                calls={information.calls}
                messages={information.messages}
                key={information.name}
            />
        ))}
    </div>
  )
}

export default TodayPlan