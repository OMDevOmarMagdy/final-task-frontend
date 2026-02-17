document.addEventListener('DOMContentLoaded', () => {
    console.log('Gadgetize Header Script Loaded');

    // Search Category Dropdown Interaction
    const searchCategory = document.querySelector('.search-category');
    if (searchCategory) {
        searchCategory.addEventListener('click', () => {
            // In a real app, this would open a dropdown
            console.log('Category dropdown clicked');
            // searchCategory.classList.toggle('active');
        });
    }

    // Top Bar Settings Interaction
    const settingsItems = document.querySelectorAll('.setting-item');
    settingsItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log('Setting item clicked:', item.textContent.trim());
        });
    });

    // Search Button
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value;
            if (query) {
                console.log('Searching for:', query);
                alert(`Searching for: ${query}`);
            }
        });
    }
});
