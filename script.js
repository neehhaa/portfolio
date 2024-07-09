document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!");
});
function showProjectDetails(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == document.getElementById('projectModal')) {
        document.getElementById('projectModal').style.display = 'none';
    }
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message!');
        // Here you can add code to send the form data to your email or server
    } else {
        alert('Please fill out all fields.');
    }
});
