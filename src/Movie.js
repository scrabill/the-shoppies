import React from 'react'

export default class Movie extends React.Component {

    render() {

        let disabled = ""

        if (this.props.nomineeIDs.length >= 5 && this.props.text === "Nominate") {
            disabled = true
        }

        if (this.props.nomineeIDs.includes(this.props.movie.imdbID) === true && this.props.text === "Nominate") {
            disabled = true
        }
        return (
            <li id={this.props.movie.imdbID}>{this.props.movie.Title} - {this.props.movie.Year} - <button id={this.props.movie.imdbID} onClick={(e) => this.props.onClick(e)} disabled={disabled}>{this.props.text}</button></li>
        )
            
    }

}