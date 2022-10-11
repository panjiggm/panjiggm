import Navbar from "./Navbar";
import Profile from "./Profile";
import Stories from "./Stories";

const Home = () => {
  return (
    <main className="bg-white px-4">
      <section className="min-h-screen container max-w-md mx-auto">
        <Navbar />
        <Profile />
        <Stories />
      </section>
    </main>
  );
};

export default Home;
