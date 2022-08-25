import React from 'react';
import { useNavigate } from 'react-router-dom';

const SurveyQuizLanding = () => {
    const navigate = useNavigate();

    return (
        <div class="flex h-screen flex-col items-center justify-center space-y-6 bg-gray-100 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <div class="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <img className='mx-auto w-36 mt-3'
                    src="https://i.ibb.co/d5kjd7B/survey-removebg-preview.png
https://i.ibb.co/JrWjypV/quiz-removebg-preview.png" alt="survey" />
                <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">Survey</h1>
                <p class="my-4 text-center text-sm text-gray-500">Simply take online surveys to answer questions about your opinion on a variety of topics.</p>
                <div class="bg-gray-100 py-4 text-center">
                    <button onClick={() => navigate('/survey')} class="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-blue-900">Get Started</button>
                </div>
            </div>
            <div class="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">

                <img className='mx-auto w-36 mt-3' src="https://i.ibb.co/JrWjypV/quiz-removebg-preview.png" alt="" />

                <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">Quiz</h1>
                <p class="my-4 text-center text-sm text-gray-500">Hexatech Quiz is powerful online test generator that will automatically mark and grade your quizzes.</p>
                <div class="bg-gray-100 py-4 text-center">
                    <button onClick={() => navigate('/quiz')} class="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-blue-900">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default SurveyQuizLanding;