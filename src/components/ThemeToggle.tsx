import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

export const ThemeToggle: React.FC = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label htmlFor="dark-mode-toggle">
        <input
          id="dark-mode-toggle"
          type="checkbox"
          onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />
        {' '}
        Dark mode
      </label>
    )}
  </ThemeToggler>
);

export default ThemeToggle;
