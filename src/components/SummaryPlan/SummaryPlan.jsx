import React from 'react'
import {MdOutlineCall} from 'react-icons/md';
import {MdOutlineMessage} from 'react-icons/md';

const SummaryPlan = ({messages,calls,name,className}) => {
  return (
    <article className={className}>
            
            <div className="container-number">
                <span className='card-number-total'>{calls+messages}</span>
            </div>
            <div className="container-title">
                <span className="card-title">{name}</span>
            </div>
            <div className="container-icon">
                <div className="container-icon-call">
                    <MdOutlineCall/>
                    <span>{calls}</span>
                </div>
                <div className="container-icon-call">
                    <MdOutlineMessage/>
                    <span>{messages}</span>
                </div>
            </div>
            
        </article>
  )
}

export default SummaryPlan