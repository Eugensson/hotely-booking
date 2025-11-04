import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const Home = () => {
  return (
    <main className="mx-auto w-full max-w-360 bg-white overflow-hidden">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
};

export default Home;
