import React, {useState} from 'react';
import axios from 'axios';

import classes from './Advice.module.css'

const Advice = () => {

    const[myAdvice, setMyAdvice] = useState('Your Daily Dose of Advice')

    const fetchAdvice = async() => {
        const response = await axios.get('https://api.adviceslip.com/advice');
        setMyAdvice(response.data.slip.advice);
    } 

    return(
        <div className={classes.card}> 
            <h1 className={classes.advices}>{myAdvice}</h1>
            <div className={classes["btn-wrapper"]}>
                <button className={classes.btn} onClick={fetchAdvice}>Advice</button>
            </div>
        </div>    
    )
};

export default Advice;