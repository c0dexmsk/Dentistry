const fs = require('fs');
const pages = require('../src/reactConfig.json'); // Ваша структура страниц

fs.writeFileSync(
  '../src/react-config.json',
  JSON.stringify({ pages }, null, 2)
);