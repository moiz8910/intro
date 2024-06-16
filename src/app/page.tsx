// "use client";

// import { VideoReveal } from "./components/VideoReveal";
// import { useState } from "react";
// import Image from "next/image"; // Import the Image component

// import moizImage from '../../moiz.jpg'; // Replace with the actual image path

// export default function Home() {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(true);

//   return (
//     <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
//       {/* Background Video Container */}
//       <div
//         className="fixed top-0 left-0 w-full h-full z-[-1]"
//         style={{ backgroundSize: 'cover' }}
//       ></div>

//       {isVideoPlaying ? (
//         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
//           <VideoReveal onVideoEnd={() => setIsVideoPlaying(false)} />
//         </div>
//       ) : (
//         <div className="text-center">
        
//           {/* <div className="grid grid-cols-4 gap-4 mb-8">
//             <DeveloperCard imgSrc={moizImage} name="Moiz Patanwala" />
//           </div> */}
          
//           <div className="mt-10">
//             <h2 className="text-9xl font-bold mb-6 text-red-500">Moiz's Projects</h2>
//             <ProjectCard 
//               title="Dog Breed Prediction" 
//               description="A machine learning model that predicts dog breeds from images." 
//               link="https://dogbreedprediction1.streamlit.app/" 
//             />
            
//             <ProjectCard 
//               title="Hairstyle Recommendation System" 
//               description="A recommendation system suggesting hairstyles based on user photos." 
//               link="https://github.com/moiz8910/hairstyle" 
//             />
//             <ProjectCard 
//               title="Recipe Website" 
//               description="A web application providing a collection of recipes with search functionality." 
//               link="https://ssrecipe.netlify.app/" 
//             />
//             <ProjectCard 
//               title="PaperTalks" 
//               description="A Streamlit application for document processing and chatting with PDFs." 
//               link="https://papertalks-chatwithpdf.streamlit.app/" 
//             />
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// // // Component for Developer Card
// // interface DeveloperCardProps {
// //   imgSrc: string; // Use string type for image source
// //   name: string;
// // }

// // function DeveloperCard({ imgSrc, name }: DeveloperCardProps) {
// //   return (
// //     <div className="text-center">
// //       <div className="flex flex-col items-center justify-center border-4 border-golden p-2 rounded-full w-52 h-52"> {/* Set a fixed width and height for the cards */}
// //         <a href="#" target="_blank" rel="noopener noreferrer"> {/* Add LinkedIn profile links here */}
// //           <div className="golden-border"> {/* Custom CSS class for golden border */}
// //             <Image
// //               src={imgSrc}
// //               alt={name}
// //               width="100%" // Set width to 100% to fill the entire card
// //               height="100%" // Set height to 100% to fill the entire card
// //               className="rounded-full"
// //             />
// //           </div>
// //         </a>
// //       </div>
// //       <p className="text-lg mt-2 font-semibold text-red-500">{name}</p>
// //     </div>
// //   );
// // }

// // Component for Project Card
// interface ProjectCardProps {
//   title: string;
//   description: string;
//   link: string;
// }

// function ProjectCard({ title, description, link }: ProjectCardProps) {
//   return (
//     <div className="text-2xl center mb-6">
//       <h3 className="text-5xl font-bold mb-6 text-yellow-500">{title}</h3>
//       <p className="text-3xl lg mb-4">{description}</p>
//       <a
//         href={link}
//         className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-md hover:bg-red-600 transition duration-300 ease-in-out"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         View Project
//       </a>
//     </div>
//   );
// }


"use client";

import { VideoReveal } from "./components/VideoReveal";
import { useState } from "react";
import Image from "next/image"; // Import the Image component

import moizImage from '../../moiz.jpg'; // Replace with the actual image path

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
      {/* Background Video Container */}
      <div
        className="fixed top-0 left-0 w-full h-full z-[-1]"
        style={{ backgroundSize: 'cover' }}
      ></div>

      {isVideoPlaying ? (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <VideoReveal onVideoEnd={() => setIsVideoPlaying(false)} />
        </div>
      ) : (
        <div className="text-center">
        
          {/* <div className="grid grid-cols-4 gap-4 mb-8">
            <DeveloperCard imgSrc={moizImage} name="Moiz Patanwala" />
          </div> */}
          
          <div className="mt-10">
            <h2 className="text-9xl font-bold mb-6 text-red-500">Moiz&apos;s Projects</h2>
            <ProjectCard 
              title="Dog Breed Prediction" 
              description="A machine learning model that predicts dog breeds from images." 
              link="https://dogbreedprediction1.streamlit.app/" 
            />
            
            <ProjectCard 
              title="Hairstyle Recommendation System" 
              description="A recommendation system suggesting hairstyles based on user photos." 
              link="https://github.com/moiz8910/hairstyle" 
            />
            <ProjectCard 
              title="Recipe Website" 
              description="A web application providing a collection of recipes with search functionality." 
              link="https://ssrecipe.netlify.app/" 
            />
            <ProjectCard 
              title="PaperTalks" 
              description="A Streamlit application for document processing and chatting with PDFs." 
              link="https://papertalks-chatwithpdf.streamlit.app/" 
            />
          </div>
        </div>
      )}
    </main>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="text-2xl center mb-6">
      <h3 className="text-5xl font-bold mb-6 text-yellow-500">{title}</h3>
      <p className="text-3xl lg mb-4">{description}</p>
      <a
        href={link}
        className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-md hover:bg-red-600 transition duration-300 ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
}
