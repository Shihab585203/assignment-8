import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <div className='m-5 text-info'>
                <h1> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> HealthFit</h1>
            </div>
        </div>
    );
};

export default Header;