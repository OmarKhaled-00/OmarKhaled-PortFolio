import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  const [is_Menu_Clicked, set_Is_Menu_Clicked] = useState(false);

  return (
    <AppContext.Provider
      value={{ isDark, setIsDark, is_Menu_Clicked, set_Is_Menu_Clicked }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
