import React from 'react';
import './option.css';

const Option = ({ option, id }) => {

    return (
        <div className='col-md-6'>
            <label className='d-flex border border-success rounded p-3 option position-relative'>
                <input type="radio" name={id} value={option} className='position-relative' style={{ zIndex: '1' }} />
                <p className='ms-2 mb-0 position-relative' style={{ zIndex: '1' }}>{option}</p>
                <span className='checked-flag'></span>
            </label>
        </div>
    );
};

export default Option;