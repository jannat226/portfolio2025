'use client'
import { motion } from "framer-motion";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education/Education";

export default function Home() {
  return (
    <motion.div
      initial={{ y: -4, filter: "blur(8px)" }}
      animate={{ y: 0, filter: "blur(0px)" }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut",
      }}
      className="min-h-screen w-full max-w-4xl flex flex-col pt-14 p-4 gap-12"
    >
      <Header />
      <About />
      <Education/>
      <Experience />
      <Projects />
    </motion.div>
  );
}