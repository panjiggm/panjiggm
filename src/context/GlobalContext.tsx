import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type GlobalContextProviderProps = {
  children: ReactNode;
};

type GlobalContexType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  openResume: boolean;
  setOpenResume: Dispatch<SetStateAction<boolean>>;
};

export const GlobalContext = createContext({} as GlobalContexType);

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [openResume, setOpenResume] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{ darkMode, setDarkMode, openResume, setOpenResume }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
