import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quiz from '../Quiz/Quiz';

export const HandleCheckedAnswerContext = createContext();

const Quizzes = () => {
    const loadedData = useLoaderData();
    const { name, questions } = loadedData.data;

    const handleCheckedAnswer = (id, answer) => {
        const selectedQuestion = questions.find(question => question.id === id);
        if (selectedQuestion.correctAnswer === answer) {
            toast.success('Wow right answer!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error('Opps wrong Answer!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <HandleCheckedAnswerContext.Provider value={handleCheckedAnswer}>
            <div className='container py-5'>
                <div className="col-lg-8 mx-auto">
                    <h2 className='text-center text-info mb-4'>Quiz of {name}({questions.length})</h2>
                    <div className="quiz-container">
                        {questions.map((question, index) => <Quiz key={question.id} question={question} index={index}></Quiz>)}
                    </div>
                </div>
                <ToastContainer />
            </div>
        </HandleCheckedAnswerContext.Provider>
    );
};

export default Quizzes;