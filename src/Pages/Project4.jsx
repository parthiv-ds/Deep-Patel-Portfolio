import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import SwipeableImageGallery from '../Component/Swappable/SwipeableImageGallery '
import ProjectImage1 from '../assets/Project4/image1.png'
import ProjectImage2 from '../assets/Project4/image2.png'
import ProjectImage3 from '../assets/Project4/image3.png'
import ProjectImage4 from '../assets/Project4/image4.png'
import ProjectImage5 from '../assets/Project4/image5.png'
import ProjectImage6 from '../assets/Project4/image6.png'



const images = [ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4, ProjectImage5, ProjectImage6];

const content = (
    <div className="space-y-4">
        <p>
            I developed a dynamic movie website using React and integrated it with The Movie Database (TMDB) API to deliver real-time movie data. The application fetches trending, upcoming, and top-rated movies, giving users access to updated content from one of the most trusted movie databases. With a clean and modern UI, the platform ensures a smooth browsing experience across all devices.      </p>

        <p>
            Users can explore movies by genre, search by title, and view detailed information about each film, including overviews, release dates, ratings, and posters. The interface is built entirely with React, taking advantage of components, state management using hooks, and React Router for seamless navigation between pages without reloading.
        </p>

        <p>
            The project also focuses on performance and responsiveness. I used lazy loading for images, conditional rendering, and efficient API handling to ensure fast load times and optimal user experience. Styling was done with Tailwind CSS to keep the UI consistent and responsive.

        </p>
        <p>This project showcases my skills in working with third-party APIs, managing asynchronous data in React, and building scalable front-end applications. It also reflects my ability to design interactive UIs that are both functional and visually engaging.

        </p>



    </div>
);

const Project4 = () => {
    return (
        <>
            <Navbar title="To-Do" />
            <SwipeableImageGallery images={images} content={content} />


        </>
    )
}

export default Project4
