import express from 'express'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger/openapi.json';

dotenv.config()
const authapp = express()
const authport = process.env.AUTHPORT

authapp.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

authapp.get('/', (request, response) => {
    response.send('Hello world!')
});


authapp.listen(authport, () => console.log(`Auth module run port:${authport}`))