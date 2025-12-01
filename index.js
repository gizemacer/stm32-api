const express = require('express');
const app = express();

// Port numarası
const PORT = process.env.PORT || 3000;

// STM32 GET ile veri gönderecek endpoint
app.get('/send', (req, res) => {
    const value = req.query.value; // ?value=84.5 şeklinde gönderilecek
    if (!value) {
        return res.status(400).send('Error: No value provided');
    }
    console.log(`STM32 sent value: ${value}`);
    res.send(`OK - Received: ${value}`);
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
