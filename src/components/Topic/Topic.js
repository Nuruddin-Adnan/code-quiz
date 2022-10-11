import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className="col-xl-3 col-md-6">
            <div className='card'>
                <img src={logo} alt="topics" className='card-img-top img-thumbnail' style={{ background: '#E0E6FF' }} />
                <div className="card-body">
                    <h3 className="card-title text-info">{name}</h3>
                    <div className="d-flex align-items-center justify-content-between">
                        <strong className='fs-5'>Total: {total}</strong>
                        <Link to={`/quiz/${id}`} className='btn btn-lg btn-info fw-semibold text-white'>Start Quiz</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;