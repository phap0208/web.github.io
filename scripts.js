const changeThemeButton = document.getElementById('change-theme');

changeThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
