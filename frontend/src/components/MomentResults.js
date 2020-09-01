import React, {useEffect, useState} from 'react';
import morningImage from '../assets/moment-morning.svg';
import middayImage from '../assets/moment-midday.svg';
import afternoonImage from '../assets/moment-afternoon.svg';
import eveningImage from '../assets/moment-evening.svg';
import '../sass/components/results.scss'
import RunService from "../services/RunService";

const MomentResults = () => {

    const [momentResults, setMomentResults] = useState([]);
    const [averageOnMoment, setAverageOnMoment] = useState([])

    useEffect(() => {
        receiveRuns();
    },[]);

    const receiveRuns = () => {
        RunService.getAll()
            .then(response => {
                const result = response.data;
                const a = response.data.sort((a, b) => parseFloat(a.average) - parseFloat(b.average))
                const momentOfDay = a[0].momentOfDay
                setMomentResults(momentOfDay)

                const valueSelected = document.getElementById('select-moment').value;
                // console.log(valueSelected);
                const momentArray = [];
                for (let i = 0; i < result.length; i++) {
                    if (result[i].momentOfDay === valueSelected) {
                        momentArray.push(result[i]);
                    }
                }

                const momentValue = [];
                for (let i = 0; i < momentArray.length; i++) {
                    momentValue.push(momentArray[i].average);
                }
                // console.log(momentValue);

                let i = 0;
                let outcome = 0;
                for (i; i < momentValue.length; i++) {
                    outcome += momentValue[i];
                }
                const averageMoment = outcome / momentValue.length;
                setAverageOnMoment(averageMoment);
                // console.log(averageMoment);

            })
            .catch(e => {
                console.log(e);
            });
    };

    const onMomentAverage = () => {

      const average = averageOnMoment/60;
      const minutes = Math.floor(average);
      const seconds = Math.floor(((average - minutes)/1.66667).toFixed(2) * 100);
      const averageFinal = (minutes + ":" + seconds);

      // console.log("minutes" + minutes);
      // console.log("seconds" + seconds);
      // console.log(averageFinal);

      return isNaN(minutes) ? 'nothing yet' : averageFinal + ' min/km.';
    }

    const bestMomentResult = () => {
        return momentResults === 'morning' ? 'morning'
                :momentResults === 'midday' ? 'midday'
                :momentResults === 'afternoon' ? 'afternoon' : 'evening';
    }

    return(
        <div className='result-component-container'>
            <div className="icon-element">
                <img className={bestMomentResult() === 'morning' ? "moment-image-active" : "moment-image-disabled"}
                     src={morningImage} alt=""/>
                <img className={bestMomentResult() === 'midday' ? "moment-image-active" : "moment-image-disabled"}
                     src={middayImage} alt=""/>
                <img className={bestMomentResult() === 'afternoon' ? "moment-image-active" : "moment-image-disabled"}
                     src={afternoonImage} alt=""/>
                <img className={bestMomentResult() === 'evening' ? "moment-image-active" : "moment-image-disabled"}
                     src={eveningImage} alt=""/>
            </div>
            <p className='result-title'>Your highest score for running is in the {bestMomentResult()}.</p>
            <p className='result-selection'>Your best average in the
                <select
                    className='select-button'
                    name="select-moment"
                    id="select-moment"
                    onChange={()=>{
                        receiveRuns();
                        onMomentAverage();
                    }}>
                    <option value="morning">morning</option>
                    <option value="midday">midday</option>
                    <option value="afternoon">afternoon</option>
                    <option value="evening">evening</option>
                </select> is {onMomentAverage()}
            </p>
        </div>
    );
}

export default MomentResults;