import React from 'react';

const Select = () => {
    
    const date = new Date();
    const dateToday = (date) => {
        let dates='';
        let todayWeek = '';
        switch(date.getDay()){
            case 0:
                todayWeek='Sun';
                break;
            case 1:
                todayWeek='Mon';
                break;
            case 2:
                todayWeek='Tue';
                break;
            case 3:
                todayWeek='Wed';
                break;
            case 4:
                todayWeek='Thu';
                break;
            case 5:
                todayWeek='Fri';
                break;
                default:
                    todayWeek='Fri';
                    break;
        }
        return dates =`${todayWeek}, ${date.getDate()} / ${(date.getMonth()+1)} / ${date.getFullYear()}`;
                    
    }
        const currentDate = dateToday(date);
    
    
    return(
        <select className=''>
            {<option value={currentDate}>{currentDate}</option>}
        </select>
    )
}

export { Select };