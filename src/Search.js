import React from 'react';
import Movie from './Movie'

const testData = {"Search":[{"Title":"Fantastic Four","Year":"2005","imdbID":"tt0120667","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNWU1ZjFjMTctYjA5ZC00YTBkLTkzZjUtZWEyMjgxY2MxYWM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Fantastic Four","Year":"2015","imdbID":"tt1502712","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTk0OTMyMDA0OF5BMl5BanBnXkFtZTgwMzY5NTkzNTE@._V1_SX300.jpg"},{"Title":"The Fantastic Four","Year":"1994","imdbID":"tt0109770","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNWZlNTliNjUtNTk5Ni00MGNhLWJkZTctYWVmYjE5OTA0NDRjXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg"},{"Title":"Doomed: The Untold Story of Roger Corman's the Fantastic Four","Year":"2015","imdbID":"tt3113456","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjAyMDA1MDYxN15BMl5BanBnXkFtZTgwMTIwNzI2OTE@._V1_SX300.jpg"},{"Title":"Powering Up: Superpowers of the 'Fantastic Four'","Year":"2015","imdbID":"tt5514618","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmVkYmU5NzItZjU2Yi00YjZjLWFkOTgtNzQwZmQyMmYxMTM4XkEyXkFqcGdeQXVyMjQ5NjgwMjA@._V1_SX300.jpg"},{"Title":"Heroes Are Born: Making 'The Fantastic Four'","Year":"2005","imdbID":"tt0816199","Type":"movie","Poster":"N/A"},{"Title":"Family Bonds: The Making of Fantastic Four: The Rise of the Silver Surfer","Year":"2007","imdbID":"tt1869414","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGQ3ZDAxOTktOWFlNi00NWQ4LThlM2UtNTlhMmY3ZTE4MThiXkEyXkFqcGdeQXVyMjQ5NjgwMjA@._V1_SX300.jpg"},{"Title":"Fantastic Four","Year":"2005","imdbID":"tt2931932","Type":"movie","Poster":"N/A"},{"Title":"Spotlight on the 'Fantastic Four' Lost Kirby Story","Year":"2007","imdbID":"tt5688286","Type":"movie","Poster":"N/A"},{"Title":"Fantastic Four","Year":"2018","imdbID":"tt7120388","Type":"movie","Poster":"N/A"}],"totalResults":"17","Response":"True"}

export default class SearchContainer extends React.Component {

  state = {
    input: "",
    results: testData.Search,
    // nominees: ["tt0120667", "tt1502712"]
    nominees: [],
    nomineeIDs: []
  }

  fetchMovies(input) {
    fetch(`${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}&type=movie&s=${input}`)
    .then(response => response.json())
    .then(data => this.renderMovies(data));
  }

  // {
  //   "Title": "Fantastic Four",
  //   "Year": "2005",
  //   "Rated": "PG-13",
  //   "Released": "08 Jul 2005",
  //   "Runtime": "106 min",
  //   "Genre": "Action, Adventure, Fantasy, Sci-Fi",
  //   "Director": "Tim Story",
  //   "Writer": "Mark Frost, Michael France, Stan Lee (Marvel comic book), Jack Kirby (Marvel comic book)",
  //   "Actors": "Ioan Gruffudd, Jessica Alba, Chris Evans, Michael Chiklis",
  //   "Plot": "A group of astronauts gain superpowers after a cosmic radiation exposure and must use them to oppose the plans of their enemy, Doctor Victor Von Doom.",
  //   "Language": "English",
  //   "Country": "USA, Germany",
  //   "Awards": "4 wins & 12 nominations.",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BNWU1ZjFjMTctYjA5ZC00YTBkLTkzZjUtZWEyMjgxY2MxYWM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  //   "Ratings": [],
  //   "Metascore": "40",
  //   "imdbRating": "5.7",
  //   "imdbVotes": "307,502",
  //   "imdbID": "tt0120667",
  //   "Type": "movie",
  //   "DVD": "06 Dec 2005",
  //   "BoxOffice": "$154,485,963",
  //   "Production": "20th Century Fox",
  //   "Website": "N/A",
  //   "Response": "True"
  //   }

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


//   handleOnClick(e) {
//     e.preventDefault();
//     console.log(e.target.id)
//     let id = e.target.id
//     this.setState(prevState => ({
//         nominees: [...prevState.nominees, id]
//       }))
  
// }

handleNomination(e) {
  e.preventDefault();

  // console.log(this.fetchNominatedMovie(e.target.id))
  // let id = e.target.id
  // let movie = e.target.parentNode.innerText
  // console.log(movie)

  // this.setState(prevState => ({
  //     nominees: [...prevState.nominees, this.fetchNominatedMovie(e.target.id)]
  //   }))

  // console.log(this.state.nominees)
  // console.log(this.state.nomineeIDs)
  }

  RemoveNomination(e) {
    let id = e.target.id

    this.setState(prevState => ({
      nominees: [...prevState.nominees.filter(movie => movie.imdbID !== id)]
    }))

    this.setState(prevState => ({
      nomineeIDs: [...prevState.nomineeIDs.filter(movie => movie !==  id)]
    }))
  }


/// this works

  // handleNomination(e) {
  //   e.preventDefault();
  //   let id = e.target.id
  //   console.log(e.target.id)

  //   this.setState(prevState => ({
  //       nominees: [...prevState.nominees, id]
  //     }))

  //   console.log(this.state.nominees)

  //   // let noms = document.querySelector("#noms")

  //   // switch (noms.children.length) {
  //   //   case 5:
  //   //     alert("You've made 5 nominations!")
  //   //     break;
    
  //   //   default:
  //   //     let li = document.createElement("li")
  //   //     li.innerHTML = `${movie.Title} - ${movie.Year} - <button>X</button>`
  //   //     noms.appendChild(li)
  //   //     break;
  //   // }

  // }

  // abstract movie to prop
  // {Title: "Fantastic Four", Year: "2018", imdbID: "tt7120388", Type: "movie", Poster: "N/A"}

  // handleNomination(e, movie) {
  //   e.preventDefault();

  //   console.log(movie)

  //   this.setState((state,movie) => {
  //     const nominees = state.nominees.concat(movie);

  //     return {
  //       nominees
  //     }
  //   })

  //     // this.setState({
  //     //   const list = this.state.nominees.concat(movie);

  //     //   return {

  //     //   }
  //     //   ...this.state,
  //     //   nominees: this.state.nominees.push(movie)
  //     // })

  //   console.log(this.state.nominees)
  // }

    

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

          {this.state.results.map(movie => <Movie nomineeIDs={this.state.nomineeIDs} key={movie.imdbID} movie={movie} onClick={(e) => this.handleNomination(e)} text={"Nominate"} /> )}

          <h2>Nominations</h2>

          <ul id="noms">
            {this.state.nominees.map(movie => <Movie nomineeIDs={this.state.nomineeIDs} key={movie.id + movie.title} movie={movie} onClick={(e) => this.RemoveNomination(e)} text={"X"} />)}
          </ul>
        </div>
      );
    }

}

//           {this.state.results.map(movie => <Movie key={movie.imdbID} movie={movie} onClick={(e,movie) => this.handleNomination(e,movie)} /> )}
