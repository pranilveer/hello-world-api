const cors = require('cors');
const express = require('express');
const app = express();

// Enable CORS
app.use(cors());

app.get('/hello', (req, res) => {
    const language = req.query.language;
    const messages = {
        English: "Hello world",
        French: "Bonjour le monde",
        Hindi: "Namastey sansar"
    };

    if (!language || !messages[language]) {
        return res.status(400).json({
            error_message: "The requested language is not supported"
        });
    }

    res.json({
        ID: Math.random().toString(36).substr(2, 9),
        msgText: messages[language]
    });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});