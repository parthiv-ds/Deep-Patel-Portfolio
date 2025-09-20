import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import SwipeableImageGallery from '../Component/Swappable/SwipeableImageGallery '
import ProjectImage1 from '../assets/Project3/image1.png'
import ProjectImage2 from '../assets/Project3/image2.png'
import ProjectImage3 from '../assets/Project3/image3.png'
import ProjectImage4 from '../assets/Project3/image4.png'



const images = [ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4,];

const content = (
  <div className="space-y-4">
    <p>
      Designed and developed a responsive Task Management web application using React to help users efficiently organize and track their daily activities. The interface is intuitive, offering a clean layout and dynamic components for smooth interaction and a seamless user experience.        </p>

    <p>
      The app allows users to create and manage multiple tasks in real-time. Tasks are displayed in a structured format with support for editing and deletion. Each task card updates automatically as the user interacts, thanks to React’s efficient state handling and component-based architecture.
    </p>

    <p>
      Implemented features like task filtering, search functionality, and a collapsible sidebar to enhance usability and accessibility. With a mobile-responsive layout and interactive feedback, this application offers a modern and reliable solution for everyday task tracking.


    </p>



  </div>
);

const Project3 = () => {
  return (
    <>
      <Navbar title="To-Do" />
      <SwipeableImageGallery images={images} content={content} />


    </>
  )
}

export default Project3
