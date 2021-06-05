import { useEffect, useState } from 'react';

const useDarkMode = (): [boolean, () => void] => {
  const [isDarkTheme, setDarkTheme] = useState(true);

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
      setDarkTheme(true);
    }
  }, []);

  return [isDarkTheme, toggleTheme];
};
export default useDarkMode;
