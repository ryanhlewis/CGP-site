import React from 'react';

const Button = ({ children, variant = 'default', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 select-none cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        default: "bg-[#111] text-white border border-white/10 hover:border-white/30 hover:bg-[#1a1a1a]",
        primary: "bg-white text-black hover:bg-gray-200 font-bold",
        ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
        outline: "border border-white/10 text-gray-300 hover:border-white/20 hover:text-white hover:bg-white/5"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
