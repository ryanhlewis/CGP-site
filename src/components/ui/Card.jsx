import React from 'react';

const Card = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
