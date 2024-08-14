'use client';
import { Switch } from '@/components/ui/switch';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkTheme]);

  return <Switch onCheckedChange={() => setDarkTheme((state) => !state)} />;
};
