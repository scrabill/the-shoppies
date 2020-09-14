import React from 'react'

export default class Movie extends React.Component {

    // state = {
    //     nominees: ["tt0120667", "tt1502712"]
    // }

    // var sayHello = name => {
    //     console.log(name + ' says hello');
    // };

    handleOnClick(e) {
        e.preventDefault();
        console.log(e.target.id)
        let id = e.target.id
        this.setState(prevState => ({
            nominees: [...prevState.nominees, id]
          }))
      
    }

    // handleNomination(e) {
    //     console.log("Dsfds")
    // }

    render() {

        // console.log(this.props.nomineeIDs)
        let disabled = ""

        if (this.props.nomineeIDs.length >= 5 && this.props.text === "Nominate") {
            disabled = true
        }

        if (this.props.nomineeIDs.includes(this.props.movie.imdbID) === true && this.props.text === "Nominate") {
            disabled = true
        }

        //  {Title: "Fantastic Four", Year: "2018", Rated: "N/A", Released: "01 Mar 2018", Runtime: "21 min", …}
// 1: {Title: "Powering Up: Superpowers of the 'Fantastic Four'", Year: "2015", Rated: "N/A", Released: "15 Dec 2015", Runtime: "20 min", …}
// length: 2
// __proto__: Array(0)


        // console.log(this.props.nominees)

        // if (this.props.nomineeIDs.includes(this.props.movie.imdbID) === true) {
        //     disabled = false
        // }

        return (
            <li id={this.props.movie.imdbID}>{this.props.movie.Title} - {this.props.movie.Year} - <button movie={this.props.movie} id={this.props.movie.imdbID} onClick={(e) => this.props.onClick(e)} disabled={disabled}>{this.props.text}</button></li>
        )
            
    }

}

// use this
//             <div id={this.props.movie.imdbID}>{this.props.movie.Title} - {this.props.movie.Year} - <button movie={this.props.movie} id={this.props.movie.imdbID} onClick={this.props.onClick} disabled={disabled}>Nominate</button> </div>


//             <div id={this.props.movie.imdbID}>{this.props.movie.Title} - {this.props.movie.Year} - <button id={this.props.movie.imdbID} onClick={(e) => this.handleOnClick(e)} disabled={disabled}>Nominate</button> </div>
