import { Link } from 'react-router-dom';
import project1 from './../../assets/Project1/image1.png'
import project2 from './../../assets/Project2/image1.png'
import project3 from './../../assets/Project3/image1.png'
import project4 from './../../assets/Project4/image1.png'
import { ExternalLink } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return [ref, isVisible];
};

const ProjectCard = ({
    project,
    isReversed = false,
    isBottomLayout = false,
    delay = 0
}) => {
    const [ref, isVisible] = useIntersectionObserver();

    const baseClasses = `transform transition-all duration-1000 ease-out ${isVisible
        ? 'translate-y-0 opacity-100'
        : 'translate-y-20 opacity-0'
        }`;

    const delayStyle = { transitionDelay: `${delay}ms` };

    if (isBottomLayout) {
        return (
            <div
                ref={ref}
                className={`w-full md:w-1/2 flex flex-col ${baseClasses}`}
                style={delayStyle}
            >
                <div className='relative overflow-hidden rounded-2xl shadow-lg mb-4 group cursor-pointer'>
                    <Link to={project.link}>
                        <div className='flex transition-transform duration-500 ease-in-out'>
                            <img
                                src={project.image}
                                alt={project.alt}
                                className='w-full h-full flex-shrink-0 bg-gray-50 transition-all duration-300 group-hover:blur-sm group-hover:scale-110'
                            />
                        </div>
                        <div className='absolute inset-0 backdrop-blur-md bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <span className={`${project.textColor || 'text-black'} text-xl md:text-3xl font-bold`} style={{ fontFamily: 'Roboto' }}>
                                Click me
                            </span>
                        </div>
                    </Link>

                </div>

                <div className='flex flex-col justify-start'>
                    <div className='space-y-3'>
                        <div className='flex items-center gap-2'>
                            <h3 className='text-2xl font-bold text-[#2d3748]' style={{ fontFamily: 'Roboto' }}>
                                {project.title}
                            </h3>
                            {project.externalLink && (
                                <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink />
                                </a>
                            )}
                        </div>
                        <p className=' text-base sm:text-lg text-[#4a5568] leading-relaxed' style={{ fontFamily: 'Roboto' }}>
                            {project.description}
                        </p>
                        {project.comingSoon && (
                            <p className='text-2xl font-bold text-[#2d3748]' style={{ fontFamily: 'Roboto' }}>
                                Coming Soon...
                            </p>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            ref={ref}
            className={`flex flex-col lg:flex-row gap-4 lg:gap-6 items-start mb-10 ${baseClasses}`}
            style={delayStyle}
        >
            <div className={`w-full lg:w-[70%] flex-shrink-0 relative ${isReversed ? 'order-1 lg:order-2' : ''}`}>
                <div className='relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer'>
                    <Link to={project.link}>

                        <div className='flex transition-transform duration-500 ease-in-out'>
                            <img
                                src={project.image}
                                alt={project.alt}
                                className='w-full h-full flex-shrink-0 bg-gray-50 transition-all duration-300 group-hover:blur-sm group-hover:scale-110'
                            />
                        </div>
                        <div className='absolute inset-0 backdrop-blur-md bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <span className='text-black text-xl md:text-3xl font-bold'
                                style={{ fontFamily: 'Roboto' }}
                            >
                                Click me
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className={`w-full lg:w-[30%] flex flex-col justify-start ${isReversed ? 'order-2 lg:order-1' : ''}`}>
                <div className='space-y-3'>
                    <h3 className='text-2xl font-bold text-[#2d3748]' style={{ fontFamily: 'Roboto' }}>
                        {project.title}
                    </h3>
                    <p className=' text-base sm:text-lg text-[#4a5568] leading-relaxed' style={{ fontFamily: 'Roboto' }}>
                        {project.description}
                    </p>
                    {project.comingSoon && (
                        <p className='text-2xl font-bold text-[#2d3748]' style={{ fontFamily: 'Roboto' }}>
                            Coming Soon...
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

const Project = () => {
    const projects = [
        {
            image: project1,
            alt: 'Project Management Dashboard',
            title: 'Project Management',
            description: 'Designed and developed a full-featured project management website with task tracking, project organization, and an admin panel for user role management.',
            link: '/project/project-management',
            comingSoon: true
        },
        {
            image: project2,
            alt: 'Milk Dairy E-commerce',
            title: 'Milk Dairy',
            description: 'Designed and developed an e-commerce website specializing in dairy-based products, offering a seamless shopping experience for fresh, high-quality items.',
            link: '/project/milk-dairy',
            comingSoon: true
        }
    ];

    const bottomProjects = [
        {
            image: project3,
            alt: 'To Do Web Application',
            title: 'To Do web',
            description: 'Designed and developed a responsive and secure To-Do web app to create, update, and track daily tasks through a simple interface.',
            link: '/project/to-do',
            externalLink: 'https://deeppatel055.github.io/Taskly/',
            textColor: 'text-black'
        },
        {
            image: project4,
            alt: 'Movie Website',
            title: 'Movie Website',
            description: 'Designed and developed a dynamic movie website to browse, search, and watch trailers with detailed information on the latest and popular films.',
            link: '/project/moviebly',
            externalLink: 'https://deeppatel055.github.io/moviebly/',
            textColor: 'text-white'
        }
    ];

    return (
        <div >
            <div className='max-w-6xl mx-auto px-4'>


                {/* Top Projects */}
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        isReversed={index === 1}
                        delay={index * 200}
                    />
                ))}

                {/* Bottom Projects - Two Column Layout */}
                <div className='flex flex-col md:flex-row gap-6'>
                    {bottomProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            isBottomLayout={true}
                            delay={index * 300}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;