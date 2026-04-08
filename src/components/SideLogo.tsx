
import clsx from "clsx";
import LogoSymbol from "./LogoSymbol";
import { outfit } from "@/lib/fonts";


type SideLogoProps = {
    text: string;
    className?: string;
}

const SideLogo = ({text, className}: SideLogoProps) => {
  return (
    <div className={clsx(outfit.className,"flex items-center font-light", className)}>
          <LogoSymbol className="block w-auto h-6" />
          <p className=" flex items-center text-lg transition-opacity duration-300 cursor-pointer">
            {text}
          </p>
    </div>
    
  );
};

export default SideLogo;