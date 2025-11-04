import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";

export const Header = () => {
  return (
    <header className="absolute w-full max-w-[1440px] py-8 xl:py-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo className="absolute top-8 left-8 sm:relative sm:top-0 sm:left-0" />
          <div className="hidden xl:flex items-center gap-x-12">
            <Nav
              containerStyles="hidden xl:flex"
              listStyles="flex items-center gap-x-12 capitalize"
              linkStyles="text-white hover:underline hover:underline-offset-5 transition-transform duration-300"
            />
            <Button
              variant="outline"
              className="px-11 h-12 rounded-xl font-semibold"
            >
              Login
            </Button>
          </div>
        </div>
        <div className="xl:hidden absolute right-8 top-8">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
