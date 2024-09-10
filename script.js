// Add hover effect on repository links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'blue';  // Change text color on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'black';  // Revert text color when not hovering
    });
});

// Alert message when clicking on a link
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent default action
        alert(`You are about to visit ${link.href}`);
        window.location.href = link.href;  // Redirect to the clicked link
    });
});
