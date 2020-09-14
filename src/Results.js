import React from 'react';

let testMovies = [
    {
        title: "Movie 1",
        year: 3883
    },
    {
        title: "Movie 2",
        year: 1299
    },
    {
        title: "Movie 3",
        year: 243
    },
    {
        title: "Movie 4",
        year: 2330
    },
]
let testMoviesRender = testMovies.map(movie => <p key={movie.title}>{movie.title} - {movie.year} - <button onClick={(e) => this.handleNomiation()}>Nominate</button></p>)

export default class ResultsContainer extends React.Component {

    handleNomiation(e) {
        e.preventDefault()
        console.log("click")
    }
    
    render() {
      return (
        <div>
          <h1>Search Results</h1>

          {testMoviesRender}

        </div>
      );
    }

}