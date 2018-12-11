const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
 	queries.getAll().then(movies => res.send(movies))
})

app.get('/:id', (req, res) => {
	queries.getById(req.params.id).then(movies => res.send(movie))
})

app.post('/', (req, res) => {
	queries.createMovie(req.body).then(movies => res.send(movies[0]))
})

app.delete('/:id', (req, res) => {
	queries.deleteMovie(req.params.id).then(res.sendStatus(204))
})

app.put('/:id', (req, res) => {
	queries.updateMovie(req.params.id, req.body).then(updatedMovieInfo => res.send(updatedMovieInfo[0]))
})

app.listen(port, () => {
 	console.log(`listening on ${port}`)
})
