import React, { useRef, useState, useEffect } from 'react';
import Project from './Project';
import Skill from './Skill';
import ExperienceSection from './Experience';
import Service from './Service';

const TabSwitch = () => {
    const [activeTab, setActiveTab] = useState('Projects');
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const tabs = ['Projects', 'Services', 'Experience', 'Skills'];
    const tabContentRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1400);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        // setIsVisible(false);
                    }
                });
            },
            {
                threshold: 0.1, 
                rootMargin: '0px 0px -50px 0px' 
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const handleTabClick = (tabId) => {
        if (tabId !== activeTab) {
            const tabContent = tabContentRef.current;

            if (tabContent) {
                tabContent.style.opacity = '0';
                tabContent.style.transform = 'translateY(-10px)';

                setTimeout(() => {
                    setActiveTab(tabId);
                }, 200);
            } else {
                setActiveTab(tabId);
            }
        }
    };

    useEffect(() => {
        const tabContent = tabContentRef.current;
        if (tabContent && (isLoaded || isVisible)) {
            tabContent.style.opacity = '0';
            tabContent.style.transform = 'translateY(-10px)';

            setTimeout(() => {
                tabContent.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                tabContent.style.opacity = '1';
                tabContent.style.transform = 'translateY(0)';
            }, 50);
        }
    }, [activeTab, isLoaded, isVisible]);

    const shouldAnimate = isLoaded || isVisible;

    return (
        <div 
            ref={containerRef}
            className={`mt-16 md:mt-20 transition-all duration-700 ease-out ${
                shouldAnimate 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
            }`}
        >
            <div className='flex flex-col sm:flex-row justify-center'>
                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`px-6 py-3 text-sm sm:text-base font-medium transition-all duration-500 transform hover:scale-105 ${
                            activeTab === tab
                                ? 'border-b rounded-full text-[#2d3748]'
                                : 'border-transparent text-[#4a5568] hover:text-[#2d3748] hover:border-gray-300'
                        } ${
                            shouldAnimate 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-4'
                        }`}
                        style={{ 
                            fontFamily: 'Lato',
                            transitionDelay: shouldAnimate ? `${index * 100}ms` : '0ms'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div
                ref={tabContentRef}
                className={`mt-8 rounded-lg min-h-[200px] transition-all duration-500 ${
                    shouldAnimate 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-6'
                }`}
                style={{ 
                    transitionDelay: shouldAnimate ? '400ms' : '0ms'
                }}
            >
                {activeTab === 'Projects' && <Project />}

                {activeTab === 'Services' &&  <Service />}
                {activeTab === 'Skills' &&  <Skill />}

                {activeTab === 'Experience' && <ExperienceSection />}
            </div>
        </div>
    );
};

export default TabSwitch;