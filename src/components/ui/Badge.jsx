import React from 'react';

const Badge = ({ children, className = '', variant = 'default' }) => {
    const variants = {
        default: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
        green: "bg-green-500/10 border-green-500/20 text-green-400",
        neutral: "bg-white/5 border-white/10 text-gray-400"
    };

    const style = variants[variant] || variants.default;

    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-mono tracking-wide ${style} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
