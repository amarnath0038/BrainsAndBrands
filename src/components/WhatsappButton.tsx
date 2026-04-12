import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9381297604?text=Hi%20I’d%20like%20to%20know%20more"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-[15px] z-[9999]"
    >
      <Image
        src="/whatsapp-logo-2.svg"
        alt="WhatsApp"
        width={48}
        height={48}
        className="drop-shadow-lg hover:scale-105 transition-transform duration-200"
      />
    </a>
  );
};

export default WhatsAppButton;