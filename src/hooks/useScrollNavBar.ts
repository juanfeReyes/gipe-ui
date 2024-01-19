import { useContext, useEffect, useRef } from "react";
import { NavBarContext } from "../components/shared/navigationBar/NavigationContext";

export const useScrollNavBar = (section: string) => {
  const ref = useRef(null);
  const { navOptions, setNavOptions } = useContext(NavBarContext);

  useEffect(() => {
    const navOptionCopy = { ...navOptions };
    navOptionCopy[section].handler = () =>
      ref.current?.scrollIntoView({ behavior: "smooth" });

    setNavOptions(navOptionCopy);
  }, [ref]);

  return ref;
};
