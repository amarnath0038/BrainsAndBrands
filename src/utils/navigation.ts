const handleSamePageScroll = (path: string) => (e: any) => {
  if (window.location.pathname === path) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export default handleSamePageScroll;