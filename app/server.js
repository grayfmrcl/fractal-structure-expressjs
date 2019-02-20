const app = require('./routes');
const config = require('../config');

const port = config.get('port') * 1 || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});