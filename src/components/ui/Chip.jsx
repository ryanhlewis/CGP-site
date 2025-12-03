import React from 'react';

const Chip = ({ children, className = '' }) => {
    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#111] text-gray-400 text-sm ${className}`}>
            {children}
        </div>
    );
};

export default Chip;
