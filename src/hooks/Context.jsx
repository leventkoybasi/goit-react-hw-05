import { useContext, createContext } from 'react';
import useTheme from './useTheme';

const MainContext = createContext();

const MainProvider = ({ children }) => {
  //useTheme() ile handle edildi.
  const { theme, setTheme, toggleTheme } = useTheme();

  const data = {
    theme,
    setTheme,
    toggleTheme,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export { MainProvider, MainContext, useContext };
