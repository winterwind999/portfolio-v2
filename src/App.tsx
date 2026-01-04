import { motion, type Variants } from "framer-motion";
import ChatBot from "./components/ChatBot";
import FloatingActionButton from "./components/FloatingActionButton";
import Map from "./components/Map";
import AboutMe from "./sections/AboutMe";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Timeline from "./sections/Timeline";

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

const App = () => {
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
          className="grid grid-cols-1 gap-3 md:grid-cols-6"
        >
          <div className="md:col-span-4">
            <AboutMe />
          </div>
          <div className="md:col-span-2">
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
};

export default App;
