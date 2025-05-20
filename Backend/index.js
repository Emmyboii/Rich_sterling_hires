const express = require('express')
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const port = 5000;
const app = express()

app.use(express.json())

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));


app.post('/submit-form', async (req, res) => {
    const jotFormAPIKey = process.env.JOTFORM_API_KEY;
    const FORM_ID = process.env.FORM_ID;

    console.log('Received submission:', req.body);

    try {
        const response = await axios.post(
            `https://api.jotform.com/form/${FORM_ID}/submissions?apiKey=${jotFormAPIKey}`,
            { submission: req.body },
            { headers: { 'Content-Type': 'application/json' } }
        );

        res.status(200).json({
            message: 'Registration successful!',
            jotformResponse: response.data
        });
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { message: 'Server Error' };
        res.status(status).json(data);
    }
});

app.listen(port, () => {
    console.log(`Backend loading on port ${port}`);
})