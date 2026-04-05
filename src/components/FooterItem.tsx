import { outfit } from "@/lib/fonts";

const FooterItem = ({text}: {text: string}) => {
  return (
    <div>
        <a className={`${outfit.className} text-white text-sm transition-colors duration-200 hover:text-[#fff3e9] cursor-pointer`}>
            {text}
        </a>
    </div>
  );
};

export default FooterItem;