import { useEffect, useState } from 'react';
const useDarkMode = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    console.log('isDark', isDarkTheme);
    window.localStorage.setItem('darkTheme', !isDarkTheme);
    setDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('darkTheme');
    localTheme && setDarkTheme(Boolean(localTheme));
  }, []);

  return [isDarkTheme, toggleTheme];
};
export default useDarkMode;
