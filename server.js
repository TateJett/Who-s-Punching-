const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const multer = require('multer');

const app = express();
const upload = multer();
const PORT = 3000; // Change if needed

app.post('/compare-faces', upload.any(), async (req, res) => {
    const apiKey = 'GymC0GMO-cWeVC4orV-ipKjny4weJ_sg';
    const apiSecret = 'YOUR_API_SECRET'; // Replace with your actual API secret
    const apiUrl = 'https://api-us.faceplusplus.com/facepp/v3/compare';

    const form = new FormData();
    form.append('api_key', apiKey);
    form.append('api_secret', apiSecret);
    form.append('image_file1', req.files[0].buffer, { filename: 'image1.jpg' });
    form.append('image_file2', req.files[1].buffer, { filename: 'image2.jpg' });

    try {
        const response = await axios.post(apiUrl, form, { headers: form.getHeaders() });
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error comparing images' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});