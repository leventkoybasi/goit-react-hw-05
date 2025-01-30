import { useContext, createContext, useState } from 'react';
import useTheme from './useTheme';

const MainContext = createContext();

const MainProvider = ({ children }) => {
  //useTheme() ile handle edildi.
  const { theme, setTheme, toggleTheme } = useTheme();
  //
  // const [movieId, setMovieId] = useState();

  const data = {
    theme,
    setTheme,
    toggleTheme,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export { MainProvider, MainContext, useContext };
