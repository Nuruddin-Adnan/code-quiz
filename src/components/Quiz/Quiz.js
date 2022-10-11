import React from 'react';
import Option from '../Option/Option';

const Quiz = ({ question, handleCheckedAnswer }) => {
    const { id, options } = question
    return (
        <div className='card mb-5 border'>
            <div className="card-body position-relative">
                <h5 className="fw-semibold text-info px-md-5 px-4 mb-3">Quiz 1: {question.question}</h5>
                <div className="option-container row g-3">
                    {
                        options.map((option, index) => <Option key={index} id={id} option={option} handleCheckedAnswer={handleCheckedAnswer}></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;