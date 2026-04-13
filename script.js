function startTest() {
    window.location.href = "login.html";
}

function handleLogin(event) {
    event.preventDefault();
    // Store that user entered credentials
    localStorage.setItem("clickedLogin", "true");

    alert("Verifying your account...");

    setTimeout(() => {
        window.location.href = "result.html";
    }, 2000);


    // Simulate phishing success
    window.location.href = "result.html";
}
function goHome() {
    window.location.href = "index.html";
}
function goToLogin() {
    window.location.href = "login.html";
}