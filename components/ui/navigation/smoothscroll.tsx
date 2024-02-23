import { MouseEvent, useEffect } from "react";

function SmoothScroll() {
  useEffect(() => {
    const smoothScrollToAnchor = (e: any) => {
      e.preventDefault();

      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = -56;

      if (targetElement) {
        const topPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: topPosition + offset,
          behavior: "smooth",
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", smoothScrollToAnchor);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", smoothScrollToAnchor);
      });
    };
  }, []);

  return null; // This component doesn't render anything, it just handles smooth scrolling
}

export default SmoothScroll;
