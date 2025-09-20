import React, { useState, useEffect } from 'react';

const Intro = ({ onComplete }) => {
    const [text, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);
    const [startTyping, setStartTyping] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const introText = "Hi, I'm Deep Patel...";
    const backspaceText = "Hi, I'm Deep Patel";

    // Mount animation
    useEffect(() => {
        const mountTimer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(mountTimer);
    }, []);

    // Start typing after mount animation
    useEffect(() => {
        if (!isVisible) return;
        const delayTimer = setTimeout(() => {
            setStartTyping(true);
        }, 800);
        return () => clearTimeout(delayTimer);
    }, [isVisible]);

    // Typing effect with smooth transitions
    useEffect(() => {
        if (!startTyping) return;

        const timer = setTimeout(() => {
            if (isTyping && currentIndex < introText.length) {
                setText(introText.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            } else if (isTyping && currentIndex === introText.length) {
                setTimeout(() => {
                    setIsTyping(false);
                    setCurrentIndex(backspaceText.length);
                }, 1500);
            } else if (!isTyping && currentIndex > 0) {
                setText(backspaceText.slice(0, currentIndex - 1));
                setCurrentIndex(currentIndex - 1);
            } else if (!isTyping && currentIndex === 0) {
                // Start exit animation
                setIsExiting(true);
                setTimeout(() => {
                    onComplete();
                }, 800);
            }
        }, isTyping ? 
            Math.random() * 40 + 60 : // Variable typing speed for more natural feel
            Math.random() * 30 + 40   // Variable backspace speed
        );

        return () => clearTimeout(timer);
    }, [currentIndex, isTyping, startTyping, onComplete]);

    // Cursor blinking effect
    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorTimer);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#e6e6e6' }}>
            {/* Background animated particles */}
            <div className="absolute inset-0 overflow-hidden">
                {/* {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-30"
                        style={{
                            backgroundColor: '#8b5cf6',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 2}s`,
                        }}
                    />
                ))} */}
            </div>

            {/* Main content */}
            <div
                className={`text-center z-10 transition-all duration-1000 ease-out transform ${isVisible && !isExiting
                        ? 'translate-y-0 opacity-100 scale-100'
                        : isExiting
                            ? 'translate-y-8 opacity-0 scale-95'
                            : 'translate-y-12 opacity-0 scale-95'
                    }`}
            >
                {/* Glowing backdrop */}
                <div className="absolute inset-0 rounded-2xl blur-xl transform scale-110" style={{
                    // background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
                }}></div>

                <div className="relative">
                    {/* Main text with enhanced styling */}
                    <div className="relative">
                        <div className="text-4xl md:text-6xl font-mono mb-4 tracking-wide" style={{ color: '#2d3748', fontFamily: 'Roboto' }}>
                            <span className="inline-block relative">
                                {text.split('').map((char, index) => (
                                    <span
                                        key={index}
                                        className={`inline-block transition-all duration-150 ${char === ' ' ? 'w-3' : ''
                                            }`}
                                        style={{
                                            animationDelay: `${index * 50}ms`,
                                            // textShadow: '0 2px 4px rgba(139, 92, 246, 0.3)',
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                                <span
                                    className={`inline-block w-0.5 h-12 md:h-16 ml-1 transition-all duration-150 ${showCursor ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    style={{
                                        backgroundColor: '#2d3748',
                                        // boxShadow: '0 0 8px rgba(139, 92, 246, 0.6)',
                                    }}
                                />
                            </span>
                           
                        </div>

                        {/* Animated underline */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-1000 ease-out"
                            style={{
                                background: '#2d3748',
                                width: isVisible && !isExiting ? '100%' : '0%',
                                transitionDelay: '1.5s'
                            }}
                        />
                    </div>

                    {/* Subtitle with staggered animation */}
                    <div className={`text-lg transition-all duration-700 delay-1000 ${isVisible && !isExiting
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-4 opacity-0'
                        }`} style={{ color: '#4a5568', fontFamily: 'Roboto' }}>
                        {"Welcome to my portfolio".split('').map((char, index) => (
                            <span
                                key={index}
                                className="inline-block transition-all duration-300"
                                style={{
                                    animationDelay: `${1500 + index * 50}ms`,
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
                                onMouseLeave={(e) => e.target.style.color = '#4a5568'}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full animate-pulse" style={{
                    border: '1px solid rgba(139, 92, 246, 0.2)'
                }}></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-lg rotate-45 animate-pulse" style={{
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    animationDelay: '1s'
                }}></div>
                <div className="absolute top-1/2 left-1/6 w-16 h-16 rounded-full animate-pulse" style={{
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    animationDelay: '2s'
                }}></div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.8; }
                }
                
                .absolute.w-1.h-1 {
                    animation: twinkle 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Intro;