function toggleDetails(id) {
    const details = document.getElementById(id);
    const icon = details.previousElementSibling.querySelector('.expand-icon');
    
    if (details.style.display === 'block') {
        details.style.display = 'none';
        icon.textContent = '+';
        icon.classList.remove('minus');
        icon.classList.add('plus');
    } else {
        details.style.display = 'block';
        icon.textContent = '-';
        icon.classList.remove('plus');
        icon.classList.add('minus');
    }
}
