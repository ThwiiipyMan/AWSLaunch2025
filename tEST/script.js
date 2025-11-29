// Get DOM elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const authPanel = document.getElementById('authPanel');
const welcomePanel = document.getElementById('welcomePanel');
const logoutBtn = document.getElementById('logoutBtn');
const userNameSpan = document.getElementById('userName');

// Toggle between login and register forms
loginBtn.addEventListener('click', () => {
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});

registerBtn.addEventListener('click', () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
});

// Handle login form submission
loginForm.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const userName = email.split('@')[0];
    showWelcomePanel(userName);
});

// Handle register form submission
registerForm.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    showWelcomePanel(name);
});

// Show welcome panel
function showWelcomePanel(name) {
    userNameSpan.textContent = name;
    authPanel.classList.add('hidden');
    welcomePanel.classList.add('active');
}

// Handle logout
logoutBtn.addEventListener('click', () => {
    welcomePanel.classList.remove('active');
    authPanel.classList.remove('hidden');
    
    // Reset forms
    loginForm.querySelector('form').reset();
    registerForm.querySelector('form').reset();
    
    // Switch back to login tab
    loginBtn.click();
});