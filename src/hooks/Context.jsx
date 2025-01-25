import { useContext, createContext, useState } from 'react';

const MainContext = createContext();

const MainProvider = ({ children }) => {
  //Theme
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const data = {
    theme,
    setTheme,
    toggleTheme,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export { MainProvider, MainContext, useContext };
