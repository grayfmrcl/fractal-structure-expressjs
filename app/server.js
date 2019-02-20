const app = require('./routes');
<<<<<<< HEAD
const config = require('../config');

const port = config.get('port') * 1 || 3000;
=======

const port = 3000;
>>>>>>> 1d6d648c05a2d153ba9bd42b15ecae5d90a4dc0b

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});