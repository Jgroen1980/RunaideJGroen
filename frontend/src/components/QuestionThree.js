import React from "react";
import '../sass/components/QuestionThree.scss';

const QuestionThree = ({setNutrition}) => {

    return(
        <div id='number-three' className='question-container-three'>
            <form action="" className="question-three-container" >
                <p className="question-title" >Did you had nutrition within the past 2 hours?</p>
                <input
                    onChange={setNutrition}
                    type="radio"
                    id="nutrition"
                    value={true}
                    name='nutrition'/>
                <label htmlFor="nutrition">Yes</label>
                <input
                    onChange={setNutrition}
                    type="radio"
                    id="no-nutrition"
                    value={false}
                    name='nutrition'/>
                <label htmlFor="no-nutrition">No</label>
            </form>
        </div>
    );
}

export default QuestionThree;