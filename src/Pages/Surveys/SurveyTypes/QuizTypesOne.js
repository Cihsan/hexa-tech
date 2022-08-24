import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react'
import quiz from '../QuizQuestion';




const QuizTypesOne = () => {
    console.log(quiz);
    return (
        <div>
            <Survey.Survey
                json={quiz}
            />
        </div>
    );
};

export default QuizTypesOne;