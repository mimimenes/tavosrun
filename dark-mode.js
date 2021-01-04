function main () {
  let isDarkMode = true;

  const toggleButton = document.getElementById('toggle-dark-mode');
  const bodyElement = document.getElementById('t')

  toggleButton.onclick = () => {
    isDarkMode = !isDarkMode;
    toggleButton.innerHTML = isDarkMode ? '🌞' : '🌙';
    bodyElement.classList.toggle('dark-mode');
  }

  toggleButton.onkeydown = (e) => {
    // It prevent changing the theme accidentally while playing
    if (e.key == ' ') {
      e.preventDefault();
      // It removes the focus from this element
      toggleButton.blur();
    }
  }
}

main()