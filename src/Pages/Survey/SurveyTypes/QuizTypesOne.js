import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react'
import json from '../QuizQuestion';




const SurveyTypeOne = () => {
    console.log(json);
    return (
        <div>
            <Survey.Survey
                json={json}
            />
        </div>
    );
};

export default SurveyTypeOne;