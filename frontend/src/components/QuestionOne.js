import React from "react";
import '../sass/components/QuestionOne.scss';

const QuestionOne = ({setAverage}) => {

    return(
        <div id="nummer-one" className={"question-container-one"} >
            <form name='form1' className="question-one-container" action="" >
                <p className="question-title">Enter your average speed in min/km</p>
                <label className="question-label" htmlFor="min">minutes</label>
                <input
                    className="question-input"
                    type="number"
                    min="0"
                    max="20"
                    id="min"
                    name='minutes'
                    required='form1'
                    />
                <label className="question-label" htmlFor="seconds">seconds</label>
                <input
                    form='form1'
                    className="question-input"
                    type="number"
                    min='0'
                    max='59'
                    id="seconds"
                    required='form1'
                    onChange={setAverage}
                    name='seconds'/>
            </form>
        </div>
    );
}

export default QuestionOne;