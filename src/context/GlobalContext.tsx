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
  openProfileStory: boolean;
  setOpenProfileStory: Dispatch<SetStateAction<boolean>>;
  openEducationStory: boolean;
  setOpenEducationStory: Dispatch<SetStateAction<boolean>>;
  openWorkExpStory: boolean;
  setOpenWorkExpStory: Dispatch<SetStateAction<boolean>>;
  openCareerStory: boolean;
  setOpenCareerStory: Dispatch<SetStateAction<boolean>>;
  openSkillsStory: boolean;
  setOpenSkillsStory: Dispatch<SetStateAction<boolean>>;
  openContactStory: boolean;
  setOpenContactStory: Dispatch<SetStateAction<boolean>>;
};

export const GlobalContext = createContext({} as GlobalContexType);

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [openResume, setOpenResume] = useState<boolean>(false);
  const [openProfileStory, setOpenProfileStory] = useState<boolean>(false);
  const [openEducationStory, setOpenEducationStory] = useState<boolean>(false);
  const [openWorkExpStory, setOpenWorkExpStory] = useState<boolean>(false);
  const [openCareerStory, setOpenCareerStory] = useState<boolean>(false);
  const [openSkillsStory, setOpenSkillsStory] = useState<boolean>(false);
  const [openContactStory, setOpenContactStory] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        openResume,
        setOpenResume,
        openProfileStory,
        setOpenProfileStory,
        openEducationStory,
        setOpenEducationStory,
        openWorkExpStory,
        setOpenWorkExpStory,
        openCareerStory,
        setOpenCareerStory,
        openSkillsStory,
        setOpenSkillsStory,
        openContactStory,
        setOpenContactStory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
