
const express = require('express');
const router = express.Router();
const crudRoutesHandler = require('./crudRoutes/crudRoutesHandler');
const { sendEmail } = require('./sendEmail');
const { connectionPool } = require('./database');
const { authenticateToken } = require('./jwtMiddleware');

router.use('/auth', require('./auth/router'))

router.use('/', authenticateToken);

router.use(crudRoutesHandler(connectionPool, 'location'))
router.use(crudRoutesHandler(connectionPool, 'lure'))
router.use(crudRoutesHandler(connectionPool, 'bait'))
router.use(crudRoutesHandler(connectionPool, 'catch'))

router.post('/email', async (req, res) => {
  const { email = '', message = '' } = req.body;
  try {

    if (!email || !message) {
      throw new Error('missing email or message')
    }

    sendEmail(email, message);
    res.status(200).json({ error: false, message: `Email was sent successfully` });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: true, message: `Could not send email: ${error.message}` });
  }
})
module.exports = router
