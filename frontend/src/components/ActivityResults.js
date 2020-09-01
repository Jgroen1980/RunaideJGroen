import React, {useEffect, useState} from 'react';
import activeImage from '../assets/active-active.svg';
import passiveImage from '../assets/active-passive.svg';
import '../sass/components/results.scss'
import RunService from "../services/RunService";

const ActivityResults = () => {

    const [activityResults, setActivityResults] = useState([]);

    useEffect(() => {
        receiveRuns();
    },[]);

    const receiveRuns = () => {
        RunService.getAll()
            .then(response => {
                const a = response.data.sort((a, b) => parseFloat(a.average) - parseFloat(b.average))
                const activityStatus = a[0].activity
                setActivityResults(activityStatus)
            })
            .catch(e => {
                console.log(e);
            });
    };

    const activityStatusResult = activityResults ?  "active" :  "passive";

    return(
        <div className='result-component-container'>
            <div className="icon-element">
                <img className={activityStatusResult === 'passive' ? "activity-image-active" : "activity-image-disabled"}
                     src={passiveImage} alt=""/>
                <img className={activityStatusResult === 'active' ? "activity-image-active" : "activity-image-disabled"}
                     src={activeImage} alt=""/>
            </div>
            <p className='result-title'>You run better if you are {activityStatusResult} in
                the hour before your training.</p>
        </div>
    );
}

export default ActivityResults;