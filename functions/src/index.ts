import * as functions from 'firebase-functions'
import * as express from 'express'
import getAllTodos from '../APIs/todos'

const app = express()

app.get('/todos', getAllTodos )
exports.api = functions.https.onRequest(app)



