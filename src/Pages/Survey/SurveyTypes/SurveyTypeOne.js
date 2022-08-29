import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react'
import json from '../QuestionOne';




const SurveyTypeOne = () => {
    return (
       <Survey.Survey
       json={json}
       />
    );
};

export default SurveyTypeOne;