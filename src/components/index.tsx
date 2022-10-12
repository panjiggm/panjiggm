import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Stories from "./Stories";

const Home = () => {
  const { darkMode } = useContext(GlobalContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-4 dark:bg-gray-900">
        <section className="min-h-screen container max-w-md mx-auto">
          <Navbar />
          <Profile />
          <Stories />
        </section>
      </main>
    </div>
  );
};

export default Home;
