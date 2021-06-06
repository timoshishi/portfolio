import { useEffect, useState } from 'react';
export const useDarkMode = (): [string, () => void, boolean] => {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('light');
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent];
};

/*
import { useEffect, useState } from 'react';

const useDarkMode = (): [boolean, () => void] => {
  console.log(`useDarkMode`);
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    window.localStorage.setItem('darkTheme', JSON.stringify(!isDarkTheme));
    setDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    const res = window.localStorage.getItem('darkTheme');
    if (res !== null) {
      const localTheme = JSON.parse(res);
      setDarkTheme(!localTheme);
    } else {
      setDarkTheme(false);
    }
  }, []);

  return [isDarkTheme, toggleTheme];
};
*/
export default useDarkMode;
