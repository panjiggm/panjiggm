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

type DataPost = {
  name: string;
  imageSrc: string;
  logo: string;
  address: string;
  description: string;
};

type GlobalContexType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  openResume: boolean;
  setOpenResume: Dispatch<SetStateAction<boolean>>;
  openPostDetail: boolean;
  setOpenPostDetail: Dispatch<SetStateAction<boolean>>;
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
  dataPost: DataPost | null;
  setDataPost: Dispatch<SetStateAction<DataPost | null>>;
};

export const GlobalContext = createContext({} as GlobalContexType);

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Dialogs
  const [openResume, setOpenResume] = useState<boolean>(false);
  const [openPostDetail, setOpenPostDetail] = useState<boolean>(false);

  // Stories
  const [openProfileStory, setOpenProfileStory] = useState<boolean>(false);
  const [openEducationStory, setOpenEducationStory] = useState<boolean>(false);
  const [openWorkExpStory, setOpenWorkExpStory] = useState<boolean>(false);
  const [openCareerStory, setOpenCareerStory] = useState<boolean>(false);
  const [openSkillsStory, setOpenSkillsStory] = useState<boolean>(false);
  const [openContactStory, setOpenContactStory] = useState<boolean>(false);

  // Datas
  const [dataPost, setDataPost] = useState<DataPost | null>(null);

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        openResume,
        setOpenResume,
        openPostDetail,
        setOpenPostDetail,
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
        dataPost,
        setDataPost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
