
import React from 'react';

const DiagnosticsEngine = ({ className, fill }) => {
    return (
        <svg className={className} width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 24V36H60V48H42L30 60V78H18V60H6V108H18V90H30V108H48L60 120H108V96H120V114H138V54H120V72H108V48H72V36H90V24H42Z" fill={fill}/>
        </svg>
    );
}

export default DiagnosticsEngine;
