import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

// Import Components
import Navbar from "./Navbar";
import Profile from "./Profile";
import Stories from "./Stories";
import Posts from "./Posts";

import DialogOpenResume from "./DialogOpenResume";
import DialogPostDetail from "./DialogPostDetail";

import ProfileStory from "./stories/ProfileStory";
import EducationStory from "./stories/EducationStory";
import WorkExpStory from "./stories/WorkExpStory";
import CareerStory from "./stories/CareerStory";
import SkillsStory from "./stories/SkillsStory";
import ContactStory from "./stories/ContactStory";

const Home = () => {
  const {
    darkMode,
    openProfileStory,
    openEducationStory,
    openWorkExpStory,
    openCareerStory,
    openSkillsStory,
    openContactStory,
  } = useContext(GlobalContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main
        className={`${
          openProfileStory ||
          openEducationStory ||
          openWorkExpStory ||
          openCareerStory ||
          openSkillsStory ||
          openContactStory
            ? "px-0"
            : "px-4"
        } bg-white dark:bg-gray-900`}
      >
        {/* =================== Main App =================== */}
        <section
          className={`${
            openProfileStory ||
            openEducationStory ||
            openWorkExpStory ||
            openCareerStory ||
            openSkillsStory ||
            openContactStory
              ? "hidden"
              : "block"
          } min-h-screen container max-w-md mx-auto`}
        >
          <Navbar />
          <Profile />
          <Stories />
          <Posts />

          <DialogOpenResume />
          <DialogPostDetail />
        </section>
        {/* =================== Main App =================== */}

        {/* =================== Stories =================== */}
        <div
          className={`${
            openProfileStory ? "block" : "hidden"
          } min-h-screen container max-w-md mx-auto`}
        >
          <ProfileStory />
        </div>
        <div
          className={`${
            openEducationStory ? "block" : "hidden"
          } min-h-screen container max-w-md mx-auto`}
        >
          <EducationStory />
        </div>
        <div
          className={`${
            openWorkExpStory ? "block" : "hidden"
          } min-h-screen container max-w-md mx-auto`}
        >
          <WorkExpStory />
        </div>
        <div
          className={`${
            openCareerStory ? "block" : "hidden"
          } min-h-screen container max-w-md mx-auto`}
        >
          <CareerStory />
        </div>
        <div
          className={`${
            openSkillsStory ? "block" : "hidden"
          } min-h-screen container max-w-md mx-auto`}
        >
          <SkillsStory />
        </div>
        <div
          className={`${
            openContactStory ? "block" : "hidden"
          } min-h-screen container max-w-md mx-auto`}
        >
          <ContactStory />
        </div>
        {/* =================== Stories =================== */}
      </main>
    </div>
  );
};

export default Home;
