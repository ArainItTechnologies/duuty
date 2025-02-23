import { useEffect, useRef } from "react";

const ScrollToTopButton = () => {
  const scrollTopRef = useRef(null);

  const handleScroll = () => {
    if (scrollTopRef.current) {
      if (window.scrollY > 100) {
        scrollTopRef.current.classList.add("active");
      } else {
        scrollTopRef.current.classList.remove("active");
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#"
      id="scroll-top"
      className="scroll-top d-flex align-items-center justify-content-center"
      ref={scrollTopRef}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollToTopButton;
