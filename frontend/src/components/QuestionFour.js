import React from "react";
import '../sass/components/QuestionFour.scss';

const QuestionFour = ({setMoment}) => {

    return(
        <div id='number-four' className='question-container-four'>
            <form action="" className="question-four-container" >
                <p className="question-title" >Wich moment of the day did you exercise?</p>
                <input
                    onChange={setMoment}
                    type="radio"
                    id="morning"
                    value={'morning'}
                    name='moment'/>
                <label htmlFor="morning">morning</label>
                <input
                    onChange={setMoment}
                    type="radio"
                    id="midday"
                    value={'midday'}
                    name='moment'/>
                <label htmlFor="midday">midday</label>
                <input
                    onChange={setMoment}
                    type="radio"
                    id="afternoon"
                    value={'afternoon'}
                    name='moment'/>
                <label htmlFor="afternoon">afternoon</label>
                <input
                    onChange={setMoment}
                    type="radio"
                    id="evening"
                    value={'evening'}
                    name='moment'/>
                <label htmlFor="evening">evening</label>
            </form>
        </div>
    );
}

export default QuestionFour;