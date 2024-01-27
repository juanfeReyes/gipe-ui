import { createContext } from "react";

export interface NavItem {
  label: string;
  path?: string;
  type?: string;
  pathOptions?: {
    label: string;
    path: string;
  }[];
}

export interface NavBarContextType {
  navOptions: {
    [key : string]: NavItem
  }
  setNavOptions: (k: any) => void
}

export const initialNavBarContext = {
  home: {
    label: "inicio",
    path: '/',
  },
  services: {
    label: "Servicios",
    pathOptions: []
  },
  news: {
    label: "Noticias",
    path: '/news',
  },
}

export const NavBarContext = createContext<NavBarContextType>({
  navOptions: initialNavBarContext,
  setNavOptions: () => {}
});