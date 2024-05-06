
require('dotenv').config();
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
let { connectionPool } = require('../database');
const { sendEmail } = require('../sendEmail');

const JWT_SECRET = process.env.JWT_SECRET;

function generateSalt() {
  return crypto.randomBytes(16).toString('hex');
}

function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

exports.login = async (req, res) => {
  console.log('login attempt')
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      throw new Error('Email or password missing');
    }

    // Retrieve user from DB
    const getUserQuery = `SELECT * FROM account WHERE email = $1`;
    const { rows: users } = await connectionPool.query(getUserQuery, [email]);

    if (users.length === 0) {
      throw new Error('Incorrect email or password');
    }

    const user = users[0];
    console.log('The user we are trying to login as: ', user);
    // Verify password
    const hashedPassword = hashPassword(password, user.password_salt);
    if (hashedPassword !== user.password_hash) {
      throw new Error('Incorrect email or password');
    }

    // Generate Token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({ token: token })
  } catch (error) {
    console.log('Login error: ', error)
    switch (error.message) {
      case 'Email or password missing':
        res.status(400).json({ message: 'Email and password must be provided.', error: true });
        break;
      case 'Incorrect email or password':
        res.status(401).json({ message: 'Incorrect email or password.', error: true });
        break;
      default:
        res.status(500).json({ message: `An unexpected error occurred. ${error.message}`, error: true });
        break;
    }
  }
};



// Registration Handler
exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Input validation
    if (!email || !password) {
      throw new Error('All fields are required');
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Invalid email');
    }

    // Password length
    if (password.length < 10) {
      throw new Error('Password must be at least 10 characters');
    }

    // Check if user already exists
    const checkUserQuery = `SELECT id FROM account WHERE email = $1`;
    const { rows: existingUsers } = await connectionPool.query(checkUserQuery, [email]);

    // If already registered, try to login
    if (existingUsers.length > 0) {
      return await this.login(req, res);
    }

    // Hash password
    const salt = generateSalt();
    const hashedPassword = hashPassword(password, salt);

    //generate a random username
    const adjectives = ['Clever', 'Wormy', 'Wily', 'Sneaky', 'Wet', 'Lucky', 'Happy', 'Jolly', 'Mighty', 'Crafty', 'Swift', 'Silent'];
    const nouns = ['Angler', 'Bass', 'Trout', 'Carp', 'Catfish', 'Salmon', 'Minnow', 'Shark', 'Whale', 'Piranha'];
    const numbers = () => Math.floor(Math.random() * 999) + 1;
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const number = numbers();
    let randomUsername = `${adjective}${noun}${number}`;

    // Insert new user into DB
    const createUserQuery = `INSERT INTO account (username, email, password_hash, password_salt, date_joined, last_login) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING id`;
    const { rows: newUserRows } = await connectionPool.query(createUserQuery, [randomUsername, email, hashedPassword, salt]);

    // Generate JWT token
    const token = jwt.sign({ userId: newUserRows[0].id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    // Respond with success message and JWT token
    res.status(201).json({ message: 'Registration successful', token: token, error: false, success: true });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(400).json({ message: error.message, error: true, success: false });
  }
};
