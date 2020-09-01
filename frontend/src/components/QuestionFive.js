import React from "react";

import '../sass/components/QuestionFive.scss';


const QuestionFive = ({setActivity}) => {

    return(
        <div id='number-five' className='question-container-five'>
            <form className="question-five-container" action="">
                <p className="question-title" >Were you active in the hour before you run?</p>
                <input
                    type="radio"
                    id="active"
                    value={true}
                    onChange={setActivity}
                    name='activity'/>
                <label htmlFor="active">Yes</label>
                <input
                    type="radio"
                    id="no-active"
                    value={false}
                    onChange={setActivity}
                    name='activity'/>
                <label htmlFor="no-active">No</label>
            </form>
        </div>
    );
}

export default QuestionFive;