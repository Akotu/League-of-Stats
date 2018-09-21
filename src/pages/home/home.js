/* eslint-disable */
import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import Search from "../../components/Search/Search";
import DarkWrapper from "../../components/DarkWrapper/DarkWrapper";
import "./home.css";
import TextField from "@material-ui/core/TextField";
import SearchBar from "../../components/SearchBar/SearchBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClick(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <DarkWrapper>
        <Grid>
          <img
            src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/multistep-signup/en_US/363b6842fb28ecec94c4bcfdb191bf0c402fdfca/assets/img/divider.png"
            className="goldlogo"
          />

          <div className="form">
            <input
              type="username"
              value={this.state.value}
              onChange={this.handleChange}
              className="searchName"
            />

            <label className="text" />
          </div>

          <button className="search" onClick={this.handleClick}>
            Search Summoner
          </button>
          <p className="test">{this.state.value}</p>
        </Grid>
      </DarkWrapper>
    );
  }
}

export default Home;
