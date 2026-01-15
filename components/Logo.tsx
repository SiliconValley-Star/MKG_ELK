import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark' | 'color';
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'color', showText = true }) => {
    return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
            {/* Amblem */}
            <img
                src="/logo.png"
                alt="MKG Elektromekanik"
                className={`h-full w-auto object-contain transition-all duration-300 ${variant === 'light' ? 'brightness-0 invert' : ''}`}
            />
            {/* Metin (Görselde yazı olmadığı için kodla ekledik) */}
            {showText && (
                <div className="flex flex-col justify-center translate-y-[2px]">
                    <h1 className={`text-2xl font-black tracking-tight leading-none font-display ${variant === 'light' ? 'text-white' : 'text-black'}`}>
                        MKG
                    </h1>
                </div>
            )}
        </div>
    );
};
