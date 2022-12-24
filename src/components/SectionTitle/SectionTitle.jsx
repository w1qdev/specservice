
import React from 'react';
import './SectionTitle.scss';


const SectionTitle = ({ title, addition }) => {
    return (
        <div className='section-title'>
            <div className="title">{title}</div>
            <div className="line"></div>
        </div>
    );
}

export default SectionTitle;
