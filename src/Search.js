import React from 'react';
import Movie from './Movie'

const testData = {"Search":[{"Title":"Fantastic Four","Year":"2005","imdbID":"tt0120667","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNWU1ZjFjMTctYjA5ZC00YTBkLTkzZjUtZWEyMjgxY2MxYWM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Fantastic Four","Year":"2015","imdbID":"tt1502712","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTk0OTMyMDA0OF5BMl5BanBnXkFtZTgwMzY5NTkzNTE@._V1_SX300.jpg"},{"Title":"The Fantastic Four","Year":"1994","imdbID":"tt0109770","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNWZlNTliNjUtNTk5Ni00MGNhLWJkZTctYWVmYjE5OTA0NDRjXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg"},{"Title":"Doomed: The Untold Story of Roger Corman's the Fantastic Four","Year":"2015","imdbID":"tt3113456","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjAyMDA1MDYxN15BMl5BanBnXkFtZTgwMTIwNzI2OTE@._V1_SX300.jpg"},{"Title":"Powering Up: Superpowers of the 'Fantastic Four'","Year":"2015","imdbID":"tt5514618","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmVkYmU5NzItZjU2Yi00YjZjLWFkOTgtNzQwZmQyMmYxMTM4XkEyXkFqcGdeQXVyMjQ5NjgwMjA@._V1_SX300.jpg"},{"Title":"Heroes Are Born: Making 'The Fantastic Four'","Year":"2005","imdbID":"tt0816199","Type":"movie","Poster":"N/A"},{"Title":"Family Bonds: The Making of Fantastic Four: The Rise of the Silver Surfer","Year":"2007","imdbID":"tt1869414","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGQ3ZDAxOTktOWFlNi00NWQ4LThlM2UtNTlhMmY3ZTE4MThiXkEyXkFqcGdeQXVyMjQ5NjgwMjA@._V1_SX300.jpg"},{"Title":"Fantastic Four","Year":"2005","imdbID":"tt2931932","Type":"movie","Poster":"N/A"},{"Title":"Spotlight on the 'Fantastic Four' Lost Kirby Story","Year":"2007","imdbID":"tt5688286","Type":"movie","Poster":"N/A"},{"Title":"Fantastic Four","Year":"2018","imdbID":"tt7120388","Type":"movie","Poster":"N/A"}],"totalResults":"17","Response":"True"}

export default class SearchContainer extends React.Component {

  state = {
    input: "",
    results: testData.Search,
    nominees: [],
    nomineeIDs: []
  }

  fetchMovies(input) {
    fetch(`${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}&type=movie&s=${input}`)
    .then(response => response.json())
    .then(data => this.renderMovies(data));
  }

  fetchNominatedMovie(imdbID) {
    fetch(`${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}&type=movie&i=${imdbID}`)
    .then(response => response.json())
    .then(data => this.renderNominations(data));
  }

  renderMovies(data) {
    this.setState({
      ...this.state,
      results: data.Search
    })
  }

  renderNominations(data) {
      this.setState(prevState => ({
      nominees: [...prevState.nominees, data]
    }))

    this.setState(prevState => ({
      nomineeIDs: [...prevState.nomineeIDs, data.imdbID]
    }))

    if (this.state.nominees.length === 5) {
      alert("You've made 5 nominations!")
    }
  }

  handleOnClick(e) {
    e.preventDefault();
    let input = document.querySelector("#input")
    this.setState({
      ...this.state,
      input: input.value
    })
    this.fetchMovies(input.value)
    input.value = ""
  }


handleNomination(e) {
  e.preventDefault();

  let id = e.target.id
  this.fetchNominatedMovie(id)

  }

  removeNomination(e) {
    let id = e.target.id

    this.setState(prevState => ({
      nominees: [...prevState.nominees.filter(movie => movie.imdbID !== id)]
    }))

    this.setState(prevState => ({
      nomineeIDs: [...prevState.nomineeIDs.filter(movie => movie !==  id)]
    }))
  }

    render() {

      let resultsHeadline = <h2>Results</h2>

      if (this.state.input !== "") {
        resultsHeadline = <h2>Showing results for "{this.state.input}"</h2>
      }

      return (
        <div>
          <h2>Search</h2>

          <form>
              <input type="text" placeholder="Search for a movie by it's title" id="input" name="input"/>
              <input type="submit" onClick={(e) => this.handleOnClick(e) } />
          </form>

          {resultsHeadline}

            <ul>
             {this.state.results.map(movie => <Movie nomineeIDs={this.state.nomineeIDs} key={movie.imdbID} movie={movie} onClick={(e) => this.handleNomination(e)} text={"Nominate"} /> )}
            </ul>

          <h2>Nominations</h2>

          <ul id="noms">
            {this.state.nominees.map(movie => <Movie nomineeIDs={this.state.nomineeIDs} key={movie.imdbID} movie={movie} onClick={(e) => this.removeNomination(e)} text={"X"} />)}
          </ul>
        </div>
      );
    }

}