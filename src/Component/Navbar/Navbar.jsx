import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  const navRef = useRef(null);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        if (typeof window === 'undefined' || !navRef.current) {
          ticking.current = false;
          return;
        }

        const currentScrollY = window.scrollY;

        // Only animate if scroll difference is significant (reduces unnecessary animations)
        if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            // Hide navbar when scrolling down (only after 100px)
            gsap.to(navRef.current, {
              y: '-100%',
              duration: 0.3,
              ease: 'power2.out'
            });
          } else if (currentScrollY < lastScrollY.current) {
            // Show navbar when scrolling up
            gsap.to(navRef.current, {
              y: '0%',
              duration: 0.3,
              ease: 'power2.out',
            });
          }

          lastScrollY.current = currentScrollY;
        }

        ticking.current = false;
      });

      ticking.current = true;
    }
  }, []);

  useGSAP(() => {
    if (!navRef.current) return;

    // Initial animation
    gsap.set(navRef.current, {
      y: -100,
      opacity: 0
    });

    const tl = gsap.timeline();
    tl.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    });

    // Only add scroll listener if window exists
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        // Kill any ongoing animations on cleanup
        gsap.killTweensOf(navRef.current);
      };
    }
  }, [handleScroll]);

  return (
    <nav
      ref={navRef}
      className="text-2xl fixed top-0 left-0 w-full h-16 px-4 bg-[#d3d3d357]
    backdrop-blur-md flex justify-center items-center z-50 text-[#2d3748] font-semibold border-b-2 border-[#7d7d7d2b]"
      style={{ fontFamily: 'Roboto', transform: 'translateY(0%)' }}
    >
      <Link to="/" className="hover:underline">{title}</Link>
    </nav>

  );
};

export default Navbar;