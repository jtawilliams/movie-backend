const database = require('./database-connection')

module.exports = {
	getAll(){
        return database('movies')
  },
  getById(id){
	  return database('movies').where({id, id}).first()
  },
  createMovie(newMovie){
	  return database('movies').insert(newMovie).returning('*')
  },
  deleteMovie(id){
	  return database('movies').where('id', id).delete()
  },
  updateMovie(id, updatedMovieInfo){
	  return database('movies').where('id', id).update(updatedMovieInfo).returning('*')
  }
}
