var MovieModel, MovieView, collectionView

var movieData = [
  {
    title: "movie 1",
    releaseDate: "NEVER",
    rating: "2",
    plot: "far off in never never land Peter Pan Died",
    coverImg: "http://www.fillmurray.com/200/200",
    category: "family"
  },
  {
    title: "movie 2",
    releaseDate: "NEVER",
    rating: "3",
    plot: "far off in never never land Peter Pan Died",
    coverImg: "http://www.fillmurray.com/300/300",
    category: "comedy"

  },
  {
    title: "movie 3",
    releaseDate: "NEVER",
    rating: "4",
    plot: "far off in never never land Peter Pan Died",
    coverImg: "http://www.fillmurray.com/400/400",
    category: "action"
  },
  {
    title: "movie 4",
    releaseDate: "NEVER",
    rating: "5",
    plot: "far off in never never land Peter Pan Died",
    coverImg: "http://www.fillmurray.com/500/500",
    category: "family"
  },
  {
    title: "movie 5",
    releaseDate: "NEVER",
    rating: "5",
    plot: "far off in never never land Peter Pan Died",
    coverImg: "http://www.fillmurray.com/550/550",
    category: "action"

  },

]

$(function(){
  movieCollection = new MovieCollection(movieData)
  collectionView = new MovieCollectionView({collection: movieCollection})
});
