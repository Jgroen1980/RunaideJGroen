import React, {useEffect, useState} from 'react';
import alcoholImage from '../assets/alcohol-glass.svg';
import '../sass/components/results.scss'
import RunService from "../services/RunService";

const AlcoholResults = () => {

    const [alcoholResults, setAlcoholResults] = useState([]);
    const [selectedALcohol, setSelectedAlcohol] = useState([]);

    useEffect(() => {
        receiveRuns();
    },[]);

    const receiveRuns = () => {
        RunService.getAll()
            .then(response => {
                const result = response.data;
                const a = result.sort((a, b) => parseFloat(a.average) - parseFloat(b.average))
                const alcoholAmount = a[0].alcohol
                setAlcoholResults(alcoholAmount)

                const valueSelected = document.getElementById('alcohol-amount').value;
                console.log(result);

                // itereren door de array met alle objecten, alleen de objecten waarin de alchol een waarde heeft van
                // valueSelected worden toegevoegd aan de nieuwe array: alcoholArray.
                const alcoholArray = []
                for (let i = 0; i < result.length; i++) {
                    if ((result[i].alcohol) === parseInt(valueSelected)) {
                        alcoholArray.push(result[i]);
                    }
                }
                // console.log(selectedAmountAlcohol);
                // console.log(alcoholArray);

                const alcoholValue = [];
                for (let i = 0; i < alcoholArray.length; i++) {
                    alcoholValue.push(alcoholArray[i].average);
                }

                // console.log(alcoholValue);

                setSelectedAlcohol(alcoholValue);
            })
            .catch(e => {
                console.log(e);
            });
    };


    const averageBestResults = () => {

        return alcoholResults === 1 ? alcoholResults + " glass" : alcoholResults + " glasses";

    }

    const selectionAlcoholResult = () => {

        let i = 0;
        let outcome = 0;
        // console.log(selectedALcohol);
        for (i; i < selectedALcohol.length; i++) {
            outcome += selectedALcohol[i];
        }
        const averageOnAlcohol = ((outcome/selectedALcohol.length)/60).toFixed(2);
        const averageMin = Math.floor(averageOnAlcohol);
        const averageSec = Math.floor(((averageOnAlcohol - averageMin)/1.666667).toFixed(2) * 100);
        const averageFinal = averageMin + ":" + averageSec;
        // console.log(averageFinal);

        return isNaN(averageMin) ? 'nothing yet' : averageFinal + " min/km.";
    }

    return(
        <div className='result-component-container'>
            <div className='icon-element' >
                <img src={alcoholImage} alt=""/>
            </div>
            <p className='result-title'>
                Your best score is with {averageBestResults()} of
                alcohol within 24 hours before exercise.
            </p>
            <p className='result-selection' >by drinking
                <select className='select-button'
                        name='alcohol-amount'
                        id='alcohol-amount'
                        onChange={()=>{
                            receiveRuns();
                            selectionAlcoholResult();
                        }}>
                    <option value="0"> 0 glasses </option>
                    <option value="1"> 1 glass </option>
                    <option value="2"> 2 glasses </option>
                    <option value="3"> 3 glasses </option>
                    <option value="4"> 4 glasses </option>
                </select>you average result is {selectionAlcoholResult()}
            </p>
        </div>
    );
}

export default AlcoholResults;