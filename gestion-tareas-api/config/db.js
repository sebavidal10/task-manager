const mongoURI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/taskManager';
module.exports = { mongoURI };
