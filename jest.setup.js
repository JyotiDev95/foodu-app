import '@testing-library/jest-dom';

if (global.TextEncoder === undefined) {
  const { TextEncoder } = require('util');
  global.TextEncoder = TextEncoder;
}