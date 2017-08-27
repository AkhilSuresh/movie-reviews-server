

'use strict';
module.exports = function(app) {
  var movieList = require('../controllers/movieController');

  app.route('/movies')
    .get(movieList.list_all_movies)
    .post(movieList.create_a_movie);

    app.route('/review')
    .get(movieList.list_all_reviews)
    .post(movieList.write_review);
};