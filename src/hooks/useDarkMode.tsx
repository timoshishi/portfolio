import { useEffect, useState } from 'react';
import { recordEvent } from '../utils';
import { Themes } from '../ts/types';

export const useDarkMode = (): [Themes, () => void, boolean] => {
  const [theme, setTheme] = useState<Themes>('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: Themes) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    const updatedThemeValue = theme === 'light' ? 'dark' : 'light';
    recordEvent({
      category: 'Theme',
      action: 'click',
      label: `Toggled theme to: ${updatedThemeValue}`,
    });
    setMode(updatedThemeValue);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Themes | null;
    localTheme ? setTheme(localTheme) : setMode('light');
    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];
};

export default useDarkMode;
