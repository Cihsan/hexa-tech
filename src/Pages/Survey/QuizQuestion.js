const jsonQuiz = {
    title: "American History",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            "elements": [
                {
                    "type": "html",
                    "html": "You are about to start quiz by history. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "civilwar",
                    "title": "When was the Civil War?",
                    "choices": [
                        "1750-1800",
                        "1800-1850",
                        "1850-1900",
                        "1900-1950",
                        "after 1950"
                    ],
                    "correctAnswer": "1850-1900"
                }
            ]
        }, {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "libertyordeath",
                    "title": "Who said 'Give me liberty or give me death?'",
                    "choicesOrder": "random",
                    "choices": [
                        "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                    ],
                    "correctAnswer": "Patrick Henry"
                }
            ]
        }, {
            "maxTimeToFinish": 15,
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "magnacarta",
                    "title": "What is the Magna Carta?",
                    "choicesOrder": "random",
                    "choices": [
                        "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                    ],
                    "correctAnswer": "The foundation of the British parliamentary system"
                }
            ]
        }
    ],
    completedHtml: `<h1 className='font-mono'>Certificate of Archievement</h1><h6 className='text-6xl h-1'>|</h6><h3 className='font-bold'>Got a Score Of</h3><p className='text-center text-2xl'><b>{correctedAnswers}</b> / <b>{questionCount}</b></p><h4 className='text-center font-bold'>On</h4><h5 className='text-2xl'>HexaTech MCQ Quiz Questions And Answers</h5>`
};
export default jsonQuiz;