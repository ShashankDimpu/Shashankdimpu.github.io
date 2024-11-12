const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route for form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using your email provider settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shashanks874pm@gmail.com',  // replace with your email
      pass: 'Shashudimpu874%',  // replace with your email password
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: 'shashanks874pm@gmail.com',  // replace with the email where you want to receive messages
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
