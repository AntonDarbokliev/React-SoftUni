const cors = require('../middlewares/cors.js');
const userRouter = require('./user.js');

module.exports = (app) => {
  app.use(cors())
  app.use('/api/users', userRouter);
};
