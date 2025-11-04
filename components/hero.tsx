import { SearchBox } from "@/components/search-box";

export const Hero = () => {
  return (
    <section
      className="pt-24 pb-12 xl:py-0 xl:h-272 flex items-center justify-center bg-hero bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="container flex items-center justify-center xl:justify-start">
        <SearchBox />
      </div>
    </section>
  );
};
