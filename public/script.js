function startTest() {
    window.location.href = "login.html";
}

function handleLogin(event) {
    event.preventDefault();

    alert("Verifying your account...");

    // 🔥 get actual input values (important)
    const email = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    // 🔥 send to correct backend route
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).catch(() => {});

    // ✅ redirect immediately (same as your logic)
    window.location.href = "result.html";
}

function goHome() {
    window.location.href = "index.html";
}