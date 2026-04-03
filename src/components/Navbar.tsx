import clsx from "clsx";
import Logo from "./Logo";
import SideLogo from "./SideLogo";

type NavBarProps = {
  className?: string;
};

const Navbar = ({ className }: NavBarProps) => {
  return (
    <div className={clsx("bg-transparent h-20 mx-27 flex justify-between px-6 pt-4", className)}>
        <SideLogo text="Explore The Studio" className={clsx("my-7 hover:underline underline-offset-2 tracking-tight")} />
        <Logo className="text-white w-auto h-16 mt-2" />    
        <SideLogo text="Create Without Limits" className={clsx("my-7 hover:underline underline-offset-2 tracking-tight")} />
    </div>
  );
};

export default Navbar;


