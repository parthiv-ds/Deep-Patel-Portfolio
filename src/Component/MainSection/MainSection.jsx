
import React, { useRef } from 'react'
import photo from '../../assets/photo.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Mainsection = () => {

  const photoRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const resumeRef = useRef(null)

  useGSAP(() => {

    // Photo animation (existing)
    gsap.set(photoRef.current, {
      x: 100,
      opacity: 0,
      scale: 0.5,
      rotation: 5
    })

    // Text animations - initial state
    gsap.set(headingRef.current, {
      x: -80,
      opacity: 0
    })

    gsap.set(paragraphRef.current, {
      x: -60,
      opacity: 0
    })

    gsap.set(resumeRef.current, {
      x: -40,
      opacity: 0
    })

    const tl = gsap.timeline()

    // Animate heading first
    tl.to(headingRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.1
    })

      // Animate paragraph
      .to(paragraphRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
      }, "-=0.6")

      // Animate resume link
      .to(resumeRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out'
      }, "-=0.4")

      // Animate photo
      .to(photoRef.current, {
        x: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'power3.out'
      }, "-=0.4")

      // Floating animation for photo
      .to(photoRef.current, {
        y: -10,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      }, "-=0.5")

  })

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#2d3748] leading-tight"
            style={{ fontFamily: 'Roboto' }}
          >
            'm a <br /> Web Developer
          </h1>
          <p
            ref={paragraphRef}
            className="mt-3 md:mt-2 text-base sm:text-lg text-[#4a5568] leading-relaxed"
            style={{ fontFamily: 'Roboto' }}
          >
            From front-end design to back-end logic, <br className="hidden sm:block" />
            I turn ideas into interactive, high-performing web applications.
          </p>
          <a
            ref={resumeRef}
             href="/Deep-Patel-Portfolio/Deep_Patel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-[#2d3748] text-white rounded-lg hover:bg-[#4a5568] transition-colors duration-300"
            style={{ fontFamily: 'Roboto' }}
          >
            Resume
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <div
            ref={photoRef}
            className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-[#2d3748]">
              <img
                src={photo}
                alt="Deep Patel - Web Developer Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-[#2d3748] rounded-full opacity-70"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 md:w-6 md:h-6 bg-[#2d3748] rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainsection