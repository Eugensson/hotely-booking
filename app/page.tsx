import { Hero } from "@/components/hero";
import { Find } from "@/components/find";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Featured } from "@/components/featured";
import { Recommendation } from "@/components/recommendation";

const Home = () => {
  return (
    <main className="mx-auto w-full max-w-360 bg-white overflow-hidden">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Recommendation />
      <Find />
      <Footer />
    </main>
  );
};

export default Home;
