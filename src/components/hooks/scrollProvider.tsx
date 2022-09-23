// LIBRARIES
import { ReactNode, useEffect } from "react";

// COMPONENTS
import useScrollStore from "components/stores/scrollStore";

// PROPS
interface ScrollProviderProps {
  children: ReactNode;
}

// FC
const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const setScroll = useScrollStore((state) => state.setScroll);

  // Set  window dims
  useEffect(() => {
    const handleScroll = () => {
      const newScroll = Math.floor(window.scrollY);
      setTimeout(() => {
        setScroll(newScroll);
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScroll]);

  return <>{children}</>;
};

export default ScrollProvider;
