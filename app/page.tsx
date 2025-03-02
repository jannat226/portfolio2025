'use client'
import { motion } from "framer-motion";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import RecentProjects from "@/components/RectentProject/RecentProject";
import TechStack from "@/components/TechStack/TechStack";
// import ToolStack from "@/components/ToolStack/ToolStack";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: -4, filter: "blur(8px)" }}
        animate={{ y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen w-full max-w-4xl flex flex-col pt-24 p-4 gap-12"
      >
        <Header />
        <div id="about" className="scroll-mt-24"><About /></div>
        <div id="experience" className="scroll-mt-24"><Experience /></div>
      
        {/* <div id="toolstack" className="scroll-mt-24"><ToolStack /></div> */}
        <div id="projects" className="scroll-mt-24"><RecentProjects /></div>
        <div id="techstack" className="scroll-mt-24"><TechStack /></div>
      </motion.div>
    </>
  );
}


// export default function Home() {
//   return (
//     <motion.div
//       initial={{ y: -4, filter: "blur(8px)" }}
//       animate={{ y: 0, filter: "blur(0px)" }}
//       transition={{ 
//         duration: 0.6,
//         ease: "easeOut",
//       }}
//       className="min-h-screen w-full max-w-4xl flex flex-col pt-14 p-4 gap-12"
//     >
//       <Header />
//       <About />
//       {/* <Education/> */}
//       <Experience />
//       <TechStack/>
//       <ToolStack/>
//       {/* <Projects /> */}
//       <RecentProjects/>
//     </motion.div>
//   );
// }