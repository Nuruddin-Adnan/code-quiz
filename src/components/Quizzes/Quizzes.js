import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const loadedData = useLoaderData();
    const { name, questions } = loadedData.data;
    return (
        <div className='container py-5'>
            <div className="col-lg-8 mx-auto">
                <h2 className='text-center text-info mb-4'>Quiz of {name}({questions.length})</h2>
                <div className="quiz-container">
                    {questions.map(question => <Quiz key={question.id} question={question}></Quiz>)}
                </div>
            </div>
        </div>
    );
};

export default Quizzes;