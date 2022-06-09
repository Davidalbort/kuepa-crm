import React from 'react';


const Logo = () =>{
    const urlLogo= 'https://www.kuepa.com/Logo-Kuepa-01-9c3697785e53e9ee964d96fe0c59b8b8.png';
    return(
        <a href='https://www.kuepa.com/kuepastrap' className=''>
            <img src={urlLogo} alt='Logo de Kuepa' style={{width: '40px'}} className=''/>
        </a>
    )
}

export {Logo};