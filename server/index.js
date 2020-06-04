require('newrelic');
require('dotenv').config();
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const { PORT } = process.env;

app.use(express.static(path.join(__dirname, '../public')));

// app.use('/api/items/:id', createProxyMiddleware({
//   target: 'http://3.132.5.204:3001/',
//   changeOrigin: true,
// }));

app.use('/items/:id', createProxyMiddleware({
  target: 'http://localhost:3002/',
  changeOrigin: true,
}));

// app.use('/api/related_products/:id', createProxyMiddleware({
//   target: 'http://54.166.182.193:3003/',
//   changeOrigin: true,
// }));

// app.use('/api/allreviews', createProxyMiddleware({
//   target: 'http://18.212.184.37:3004/',
//   changeOrigin: true,
// }));

app.listen(port);
