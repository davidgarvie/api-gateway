const app = require('./src/server');

const PORT = 8080;

app.listen(PORT, () => {
  console.info(`Listening on ${PORT}`);
});
