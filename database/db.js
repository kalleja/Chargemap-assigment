//module is in strict mode by default ;)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


(async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('DB CONNECTED');
  } catch (err) {
    console.error('NO CONNECTION', err);
  }
})();

module.exports = mongoose.connection;
