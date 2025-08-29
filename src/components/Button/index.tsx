import React from 'react';
import { type ButtonProps } from "../../types/types";

const Button = ({ title, variant = "primary", onClick, Icon }: ButtonProps) => {
    const estilos: Record<string, string> = {
        primary: "bg-purple-800 text-black w-[50%]",
        secondary: "bg-red-600 text-white",
        delete: "bg-red-600 text-white",
        alter: "bg-purple-500 text-black"
    };

    return (
        <div className='flex justify-center items-center  px-4 pb-6 w-full'>
            <button 
                className={` flex items-center justify-center gap-2 px-4 hover:cursor-pointer transition-transform duration-300 transform hover:scale-105  py-2 text-base md:text-lg rounded-xl font-semibold ${estilos[variant]}`}   onClick={onClick}> 
                {Icon && <Icon className="h-6 w-6" />}
                <span>{title}</span>
            </button>
        </div>
    );
};

export { Button };