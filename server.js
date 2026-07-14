import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Robustly resolve the path to the .env file in the same folder as server.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// POST Route for Form Submission
app.post('/api/contact', async (req, res) => {
  const { parent_name, whatsapp, email, plan, currency, message } = req.body;

  try {
    // Check if env variables are loaded
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      throw new Error("SMTP credentials are not configured in the .env file.");
    }

    // 1. Configure the SMTP transporter for Nodemailer (using Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address (sender)
        pass: process.env.GMAIL_PASS, // Your Gmail App Password
      },
    });

    // 2. Set up the email parameters
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.GMAIL_USER, // recipient
      subject: 'New Free Trial Request - Quran Academy',
      text: `Assalamu Alaikum,

You have received a new Free Trial class request from the website:

-----------------------------------------------
Parent Name: ${parent_name || 'N/A'}
WhatsApp Number: ${whatsapp || 'N/A'}
Email Address: ${email || 'N/A'}
Selected Plan: ${plan || 'N/A'}
Preferred Currency: ${currency || 'PKR'}
Student Details / Message:
${message || 'No additional details provided'}
-----------------------------------------------

Submitted On: ${new Date().toString()}`,
    };

    // 3. Send email via SMTP
    await transporter.sendMail(mailOptions);

    res.status(200).json({ result: 'success' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    
    // Log error details to a local log file so it can be inspected
    const logMessage = `${new Date().toISOString()} - Nodemailer Error: ${error.stack || error.message}\n`;
    fs.appendFileSync(join(__dirname, 'server_error.log'), logMessage);
    
    res.status(500).json({ result: 'error', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
