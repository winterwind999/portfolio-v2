import { motion } from "framer-motion";
import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.button
      aria-label="up-arrow"
      className="bg-primary fixed right-6 bottom-6 z-50 cursor-pointer rounded p-2 hover:p-2.5"
      onClick={goUp}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <ArrowUpIcon className="text-primary-foreground" />
    </motion.button>
  );
};

export default FloatingActionButton;
