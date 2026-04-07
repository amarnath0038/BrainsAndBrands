const SocialIcons = () => {
  return (
    <div className="flex space-x-3 lg:space-x-4 text-white">


      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/brainsandbrands-1"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#e8ebea] transition-colors duration-200"
      >
        <i className="ri-linkedin-box-fill text-[20px] leading-[20px]" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61582833463251"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#e8ebea] transition-colors duration-200"
      >
        <i className="ri-facebook-circle-fill text-[20px] leading-[20px]" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/brainsandbrands_studio/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#e8ebea] transition-colors duration-200"
      >
        <i className="ri-instagram-line text-[20px] leading-[20px]" />
      </a>

    </div>
  );
};

export default SocialIcons;