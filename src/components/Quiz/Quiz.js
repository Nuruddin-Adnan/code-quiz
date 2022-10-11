import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Option from '../Option/Option';

const Quiz = ({ question, handleCheckedAnswer }) => {
    const { id, options, correctAnswer } = question;

    const [correctAns, setCorrecAns] = useState(false)

    const showCorrectAns = () => {
        setCorrecAns(!correctAns);
    }

    return (
        <div className='card mb-5 border'>
            <div className="card-body position-relative">
                <h5 className="fw-semibold text-info px-md-5 px-4 mb-3">Quiz 1: {question.question}</h5>
                <button className='btn position-absolute top-0 end-0' onClick={showCorrectAns}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                <div className="option-container row g-3">
                    {
                        options.map((option, index) => <Option key={index} id={id} option={option} handleCheckedAnswer={handleCheckedAnswer}></Option>)
                    }
                </div>
                {
                    correctAns && <h5 className='mb-0 pt-3 text-center'>Answer: <span className='text-success'>{correctAnswer}</span></h5>
                }
            </div>
        </div>
    );
};

export default Quiz;