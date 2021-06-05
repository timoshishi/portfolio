import { useEffect, useState } from 'react';

const useDarkMode = (): [boolean, () => void] => {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    window.localStorage.setItem('darkTheme', JSON.stringify(!isDarkTheme));
    setDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    let localTheme = true;
    const res = window.localStorage.getItem('darkTheme');
    if (res !== null) {
      localTheme = JSON.parse(res);
    }
    localTheme && setDarkTheme(!localTheme);
  }, []);

  return [isDarkTheme, toggleTheme];
};
export default useDarkMode;
