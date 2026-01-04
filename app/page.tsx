"use client";

import ChatBot from "@/components/chatbot";
import FloatingActionButton from "@/components/floating-action-button";
import Map from "@/components/map";
import { motion, Variants } from "framer-motion";
import Experiences from "./(sections)/(experiences)/experiences";
import Projects from "./(sections)/(projects)/projects";
import AboutMe from "./(sections)/about-me";
import Footer from "./(sections)/footer";
import Header from "./(sections)/header";
import Profile from "./(sections)/profile";
import TechStack from "./(sections)/tech-stack";
import Timeline from "./(sections)/timeline";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Page() {
  return (
    <div className="m-3 flex min-h-dvh justify-center">
      <motion.div
        className="flex flex-col gap-3 md:m-0 md:w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Header />
        </motion.div>

        <motion.div variants={itemVariants} className="h-52 w-full rounded-lg">
          <Map />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Profile />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 gap-3 lg:grid-cols-6"
        >
          <div className="lg:col-span-4">
            <AboutMe />
          </div>
          <div className="lg:col-span-2">
            <Timeline />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <TechStack />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Experiences />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Projects />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Footer />
        </motion.div>

        <ChatBot />
        <FloatingActionButton />
      </motion.div>
    </div>
  );
}
