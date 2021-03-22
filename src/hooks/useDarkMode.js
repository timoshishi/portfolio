import { useEffect, useState } from 'react';
const useDarkMode = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const themeToggler = () => {
    console.log('isDark', isDarkTheme);
    window.localStorage.setItem('darkTheme', !isDarkTheme);
    setDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('darkTheme');
    localTheme && setDarkTheme(localTheme);
  }, []);

  return [isDarkTheme, themeToggler];
};
export default useDarkMode;
