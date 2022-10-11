import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadCry } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <div className=' text-center'>
                <FontAwesomeIcon icon={faFaceSadCry} className='text-muted' style={{ fontSize: '5rem' }} />
                <i class="fa-solid fa-face-head-bandage"></i>
                <h1 className='mt-4'>404</h1>
                <h5>Page not found</h5>
                <p>The page you are looking for does not exist</p>
                <Link to='/' className='btn btn-lg btn-primary'>Home page</Link>
            </div>
        </div>
    );
};

export default NotFound;