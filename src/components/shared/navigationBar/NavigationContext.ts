import { createContext } from "react";

export interface NavBarContextType {
  navOptions: {
    [key : string] : {
      label: string;
      path: string;
      handler: () => void
      type?: string
    }
  }
  setNavOptions: (k: any) => void
}

export const initialNavBarContext = {
  home: {
    label: "inicio",
    path: '/',
    type: 'scroll',
    handler: () => {}
  },
  services: {
    label: "Servicios",
    path: '/services',
    handler: () => {}
  },
  news: {
    label: "Noticias",
    path: '/news',
    handler: () => {}
  },
}

export const NavBarContext = createContext<NavBarContextType>({
  navOptions: initialNavBarContext,
  setNavOptions: () => {}
});