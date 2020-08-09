import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import styled from '@emotion/styled';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: (theme: string) => void;
}

const StyledButton = styled.button`
  background-color: var(--textTitle);
  color: var(--bg);
  border: 1px solid var(--bg);
  border-radius: 3px;
`;

export const ThemeToggle: React.FC = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }: ThemeToggleProps) => (
      <label htmlFor="dark-mode-toggle">
        <StyledButton
          id="dark-mode-toggle"
          onClick={() => toggleTheme(theme && theme === 'light' ? 'dark' : 'light')}
        >
          Enable
          {' '}
          {theme === 'dark' ? 'light' : 'dark'}
          {' '}
          mode
        </StyledButton>
      </label>
    )}
  </ThemeToggler>
);

export default ThemeToggle;
