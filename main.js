const app = require('./app');
const envConfig = require('./app/config');

app.listen(envConfig.port, () => {
  console.log(`server is running at port ${envConfig.port}`);
});