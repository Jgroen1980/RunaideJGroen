import React from "react";
import '../sass/components/QuestionSix.scss';

const QuestionSix = ({setSleep}) => {

    return(
        <div id="nummer-six" className={"question-container-six"} >
            <form name='form1' className="question-six-container" action=""  >
                <p className="question-title">How much sleep did you had in the past 24 hours?</p>
                <label className="question-label" htmlFor="hours">hours</label>
                <input
                    className="question-input"
                    type="number"
                    min="0"
                    max="24"
                    id="sleep-hours"
                    name='hours'
                    required='form1'
                    />
                <label className="question-label" htmlFor="minutes">minutes</label>
                <input
                    form='form1'
                    className="question-input"
                    type="number"
                    id="sleep-minutes"
                    min='0'
                    max='59'
                    required='form1'
                    onChange={setSleep}
                    name='minutes'/>
            </form>
        </div>
    );
}

export default QuestionSix;