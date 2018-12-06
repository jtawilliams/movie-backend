
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
		{
		  title: 'Watchmen',
		  director: 'Zack Snyder',
		  year: 2009,
		  rating: 64.0,
		  poster: 'https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2018%2F06%2FWatchmen-movie-cast.jpg&c=sc&w=736&h=485'
		},
		{
		  title: 'Inception',
		  director: 'Christopher Nolan',
		  year: 2010,
		  rating: 86.0,
		  poster: 'https://is1-ssl.mzstatic.com/image/thumb/Video4/v4/86/ac/14/86ac14f2-8c9b-2a5a-80be-49b8ee402228/pr_source.lsr/268x0w.png'
	  	},	
		{
		  title: 'Baby Driver',
		  director: 'Edgar Wright',
		  year: 2017,
		  rating: 93.0,
		  poster: 'https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_UX182_CR0,0,182,268_AL_.jpg'
		}
      ]);
    });
};
