import { useEffect, useState, useCallback } from 'react';
import store from '../storage';

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      if (store.get('darkMode') === null) {
        setDarkMode(e.matches);
      }
    };

    if (mediaQuery.addListener) {
      mediaQuery.addListener(handler);
    }

    setDarkMode(store.get('darkMode') === null ? mediaQuery.matches : !!store.get('darkMode'));

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-dark-mode', '');
    } else {
      document.body.removeAttribute('data-dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    const nextDarkMode = !darkMode;
    setDarkMode(nextDarkMode);
    store.set('darkMode', nextDarkMode);
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
}

export default useDarkMode;
