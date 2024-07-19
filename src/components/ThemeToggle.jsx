function ThemeToggle({ theme, toggleTheme }) {
  return <button onClick={toggleTheme}>
    {theme === "light" ? "Dark" : "Light"} Mode
  </button>;
}

export default ThemeToggle;
