// Function to toggle between grid and list view
function toggleView(view) {
    const membersList = document.getElementById('membersList');
    if (view === 'grid') {
        membersList.classList.add('grid');
        membersList.classList.remove('list');
    } else {
        membersList.classList.add('list');
        membersList.classList.remove('grid');
    }
}

