import ChatBot from "@/components/chatbot";
import FloatingActionButton from "@/components/floating-action-button";
import Map from "@/components/map";
import { MotionContainer, MotionItem } from "@/components/motion-wrapper";
import Experiences from "./(sections)/(experiences)/experiences";
import Projects from "./(sections)/(projects)/projects";
import AboutMe from "./(sections)/about-me";
import Footer from "./(sections)/footer";
import Header from "./(sections)/header";
import Profile from "./(sections)/profile";
import TechStack from "./(sections)/tech-stack";
import Timeline from "./(sections)/timeline";

export default function Page() {
  return (
    <div className="m-3 flex min-h-dvh justify-center">
      <MotionContainer className="flex flex-col gap-3 md:m-0 md:w-1/2">
        <MotionItem>
          <Header />
        </MotionItem>

        <MotionItem className="h-52 w-full rounded-lg">
          <Map />
        </MotionItem>

        <MotionItem>
          <Profile />
        </MotionItem>

        <MotionItem className="grid grid-cols-1 gap-3 lg:grid-cols-6">
          <div className="lg:col-span-4">
            <AboutMe />
          </div>
          <div className="lg:col-span-2">
            <Timeline />
          </div>
        </MotionItem>

        <MotionItem>
          <TechStack />
        </MotionItem>

        <MotionItem>
          <Experiences />
        </MotionItem>

        <MotionItem>
          <Projects />
        </MotionItem>

        <MotionItem>
          <Footer />
        </MotionItem>
      </MotionContainer>

      <ChatBot />
      <FloatingActionButton />
    </div>
  );
}
