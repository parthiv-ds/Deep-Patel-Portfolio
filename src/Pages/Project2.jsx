import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import SwipeableImageGallery from '../Component/Swappable/SwipeableImageGallery '
import ProjectImage1 from '../assets/Project2/image1.png'
import ProjectImage2 from '../assets/Project2/image2.png'
import ProjectImage3 from '../assets/Project2/image3.png'
import ProjectImage4 from '../assets/Project2/image4.png'
import ProjectImage5 from '../assets/Project2/image5.png'
import ProjectImage6 from '../assets/Project2/image6.png'


const images = [ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4, ProjectImage5, ProjectImage6];

const content = (
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
);

const Project2 = () => {
  return (
    <>
      <Navbar title="Milk Dairy" />
      <SwipeableImageGallery images={images} content={content} />
    </>
  )
}

export default Project2
