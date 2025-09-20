import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import SwipeableImageGallery from './../Component/Swappable/SwipeableImageGallery ';

// Assets for project-management
import ProjectImage1 from '../assets/Project1/image1.png';
import ProjectImage2 from '../assets/Project1/image2.png';
import ProjectImage3 from '../assets/Project1/image3.png';
import ProjectImage4 from '../assets/Project1/image4.png';
import ProjectImage5 from '../assets/Project1/image5.png';
import ProjectImage6 from '../assets/Project1/image6.png';
import ProjectImage7 from '../assets/Project1/image7.png';

import DairyImage1 from '../assets/Project2/image1.png';
import DairyImage2 from '../assets/Project2/image2.png';
import DairyImage3 from '../assets/Project2/image3.png';
import DairyImage4 from '../assets/Project2/image4.png';
import DairyImage5 from '../assets/Project2/image5.png';
import DairyImage6 from '../assets/Project2/image6.png';

import TodoImage1 from '../assets/Project3/image1.png'
import TodoImage2 from '../assets/Project3/image2.png'
import TodoImage3 from '../assets/Project3/image3.png'
import TodoImage4 from '../assets/Project3/image4.png'

import MovieImage1 from '../assets/Project4/image1.png'
import MovieImage2 from '../assets/Project4/image2.png'
import MovieImage3 from '../assets/Project4/image3.png'
import MovieImage4 from '../assets/Project4/image4.png'
import MovieImage5 from '../assets/Project4/image5.png'
import MovieImage6 from '../assets/Project4/image6.png'


const projectData = {
    'project-management': {
        title: 'Project Management',
        images: [ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4, ProjectImage5, ProjectImage6, ProjectImage7],
        content: (
            <div className="space-y-4">
                <p>
            This  Project Management website   is a      full-stack application built using React for the frontend,  Node.js for the backend, and MySQL as the database. It is designed to help teams manage and monitor their projects and tasks efficiently with real-time updates and intuitive interfaces. The system supports the full lifecycle of a project—from creation to completion—ensuring better organization and visibility across tasks.
        </p>

        <p>
            Admins can create multiple projects and define essential details like project title, description, start date, due date, and status. Each project can contain multiple tasks, which are the building blocks of project execution. Tasks can be assigned to individual users, making collaboration easier and more organized. Every task supports fields such as title, description, priority level (high, medium, low), due date, and status (pending, in progress, completed), allowing the team to stay focused and aligned.
        </p>

        <p>
            User management is built into the system with role-based access control. The admin has full access to create, edit, and delete projects and tasks, as well as manage users.Super Admin role has auto assign in all admin created project and task. Write role users can view and update only their assigned tasks, depending on their role permissions. Read role can only see the project and task This role-based approach ensures secure data handling and keeps the focus on individual responsibilities within a collaborative environment.
        </p>

        <p>
            The backend, powered by Node.js and Express, handles all API requests securely and efficiently. MySQL is used as the relational database to store structured data related to users, projects, and tasks. The frontend, built in React, communicates with the backend via REST APIs to provide a smooth and responsive user experience. Features like real-time task updates, status tracking, and priority sorting are implemented to enhance productivity and transparency.
        </p>

        <p>
            This system is highly scalable and can be extended further with features like email notifications like when user assign in project and task, user comments and audit logs. It serves as a reliable foundation for teams aiming to manage their workflow digitally and keep every team member aligned with project goals.
        </p>
            </div>
        ),
    },

    'milk-dairy': {
        title: 'Milk Dairy',
        images: [DairyImage1, DairyImage2, DairyImage3, DairyImage4, DairyImage5, DairyImage6],
        content: (
            <div className="space-y-4">
                 <p>
           I designed and developed a full-featured milk-based e-commerce platform using the MERN stack, tailored specifically for selling dairy products like milk, curd, and buttermilk. The system supports both individual and bulk purchases in the form of crates, streamlining the ordering experience for customers. With a focus on local vendors and recurring deliveries, the platform ensures that customers can schedule regular milk deliveries with ease.
        </p>
        
        <p>
           The application supports role-based access with separate dashboards and functionalities for Admin, Vendor, Delivery Personnel, and Cashier. The Admin panel allows for product and inventory management, user control, order tracking, and vendor coordination. Vendors can manage their product listings and crate availability, while Delivery agents have access to optimized delivery routes and customer delivery statuses. The Cashier role handles in-person payments and order verifications.
        </p>
        
        <p>
         Customers can browse and add dairy items to their cart, select quantities in crates, and place orders using a seamless add-to-cart and checkout flow. The platform supports both online payments (via UPI, cards, etc.) and offline options (Cash on Delivery). A responsive UI ensures accessibility across devices, while secure backend logic ensures data protection and fast order processing.
        </p>
        
        <p>
          Overall, this project showcases my skills in building scalable, real-world e-commerce solutions with a complex role system, advanced cart and payment features, and intuitive UI/UX — all built from the ground up using the MERN stack.
        </p>
        
            </div>
        ),
    },
    'to-do': {
        title: 'To-Do',
        images: [TodoImage1, TodoImage2, TodoImage3, TodoImage4],
        content: (
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
        ),

    },
    'moviebly': {
        title: 'Movibly',
        images: [MovieImage1, MovieImage2, MovieImage3, MovieImage4, MovieImage5, MovieImage6],
        content: (
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
        ),


    },

}
const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectData[id];

    if (!project) {
        return <div className="text-center text-red-600 text-xl mt-10">Project not found</div>;
    }

    return (
        <>
            <Navbar title={project.title} />
            <SwipeableImageGallery images={project.images} content={project.content} />
        </>
    );
}

export default ProjectDetails 
