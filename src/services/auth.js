const jwt = require('jsonwebtoken');

const API_SECRET = 'mysecret';

const JWT_CONFIG = {
  expiresIn: '10h',
  algorithm: 'HS256',
};

const generateToken = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  let decoded;
  try {
    decoded = jwt.verify(token, API_SECRET);
  } catch (error) {
    return false;
  }
  
  const result = decoded.data;
  if (!result) return false;
  return result;
};

module.exports = {
  generateToken,
  verifyToken,
};