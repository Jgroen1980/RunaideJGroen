import React, {useEffect, useState} from 'react';
import nutritionImage from '../assets/nutrition.svg';
import '../sass/components/results.scss'
import RunService from "../services/RunService";

const NutricionResults = () => {

    const [nutritionResults, setNutritionResults] = useState([]);

    useEffect(() => {
        receiveRuns();
    },[]);

    const receiveRuns = () => {
        RunService.getAll()
            .then(response => {
                const a = response.data.sort((a, b) => parseFloat(a.average) - parseFloat(b.average))
                const nutritionStatus = a[0].nutrition
                setNutritionResults(nutritionStatus)
            })
            .catch(e => {
                console.log(e);
            });
    };

    const nutritionStatusResults = nutritionResults ?  "to eat" :  "not to eat";

    return(
        <div className='result-component-container'>
            <div className="icon-element">
                <img src={nutritionImage} alt=""/>
            </div>
            <p className='result-title'>It is best for you {nutritionStatusResults} in
                the 2 hours before your workout.</p>
        </div>
    );
}

export default NutricionResults;