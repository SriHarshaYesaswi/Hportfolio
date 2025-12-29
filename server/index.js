const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// POST /api/contact
// body: { name, email, message }
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'name, email and message are required' });
  }

  // If SMTP is configured via environment, attempt to send an email.
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.FROM_EMAIL || process.env.SMTP_USER,
        to: process.env.TO_EMAIL || process.env.SMTP_USER,
        subject: `Portfolio contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      };

      await transporter.sendMail(mailOptions);
      return res.json({ ok: true, sent: true });
    } catch (err) {
      console.error('SMTP send error:', err);
      // fallthrough to saving message
    }
  }

  // Fallback: append message to server/messages.json
  try {
    const messagesPath = path.join(__dirname, 'messages.json');
    const entry = { name, email, message, createdAt: new Date().toISOString() };

    let messages = [];
    if (fs.existsSync(messagesPath)) {
      messages = JSON.parse(fs.readFileSync(messagesPath, 'utf8') || '[]');
    }
    messages.push(entry);
    fs.writeFileSync(messagesPath, JSON.stringify(messages, null, 2), 'utf8');

    return res.json({ ok: true, saved: true });
  } catch (err) {
    console.error('Save message error:', err);
    return res.status(500).json({ ok: false, error: 'failed to save message' });
  }
});

app.use('/api', (req, res) => {
  res.status(404).json({ ok: false, error: 'unknown API route' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
