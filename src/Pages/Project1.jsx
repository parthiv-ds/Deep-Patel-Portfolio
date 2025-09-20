import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import SwipeableImageGallery from '../Component/Swappable/SwipeableImageGallery '
import ProjectImage1 from '../assets/Project1/image1.png'
import ProjectImage2 from '../assets/Project1/image2.png'
import ProjectImage3 from '../assets/Project1/image3.png'
import ProjectImage4 from '../assets/Project1/image4.png'
import ProjectImage5 from '../assets/Project1/image5.png'
import ProjectImage6 from '../assets/Project1/image6.png'
import ProjectImage7 from '../assets/Project1/image7.png'

const images = [ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4, ProjectImage5, ProjectImage6, ProjectImage7];

const content = (
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
            This system is highly scalable and can be extended further with features like notifications, file attachments, user comments, audit logs, and performance dashboards. It serves as a reliable foundation for teams aiming to manage their workflow digitally and keep every team member aligned with project goals.
        </p>
    </div>
);

const Project1 = () => {
    return (
        <>
            <Navbar title="Project Management" />
            <SwipeableImageGallery images={images} content={content} />


        </>
    )
}

export default Project1
