
import clsx from "clsx";
import LogoSymbol from "./LogoSymbol";
import { outfit } from "@/lib/fonts";


type SideLogoProps = {
    text: string;
    className?: string;
}

const SideLogo = ({text, className}: SideLogoProps) => {
  return (
    <div className={clsx(outfit.className,"flex justify-between font-light", className)}>
          <LogoSymbol className="hidden lg:block w-auto h-6" />
          <p className="-mt-1 text-sm sm:text-base lg:text-lg transition-opacity duration-300 cursor-pointer">
            {text}
          </p>
    </div>
    
  );
};

export default SideLogo;