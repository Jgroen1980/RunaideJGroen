import React, {useEffect, useState} from 'react';
import '../sass/components/results.scss';
import RunService from "../services/RunService";
import sleepImage from '../assets/sleep.svg';

const SleepResults = () => {

    const [sleepResult, setSleepResult] = useState([]);

    useEffect(() => {
        receiveRuns();
    },[]);

    const receiveRuns = () => {
        RunService.getAll()
            .then(response => {
                const a = response.data.sort((a, b) => parseFloat(a.average) - parseFloat(b.average))
                const sleep = (a[0].sleep / 60).toFixed(2)
                const sleepHours = Math.floor(sleep)
                const sleepMinutes = Math.floor((sleep - sleepHours) * 100 / 1.666667)
                const sleepAverage = sleepHours + " hours and " + sleepMinutes + " minutes "
                setSleepResult(sleepAverage)
            })
            .catch(e => {
                console.log(e);
            });
    };

    return(
        <div className='result-component-container'>
            <div className="icon-element">
                <img src={sleepImage} alt=""/>
            </div>
            <p className='result-title'>If you sleep about {sleepResult}
                you get the best score.</p>
        </div>
    );
}

export default SleepResults;