import express from 'express'

const authapp = express();
const authport = 5000;
authapp.get('/', (request, response) => {
  response.send('Hello world!');
});
authapp.listen(authport, () => console.log(`Running on port ${authport}`));