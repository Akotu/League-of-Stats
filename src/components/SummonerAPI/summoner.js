/* eslint-disable */
import React, { Component } from "react";
require("dotenv").config();

const db = require("db");

db.connect({
  api_key: process.env.api_key,
  URL: process.env.URL
});

var apiKey = "RGAPI-f2d59f42-42a1-4499-b6dc-d41195721ef6";
var s_toSearch = "certatim";
var URL =
  "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" +
  s_toSearch +
  "?api_key=" +
  apiKey;

//Put Api Key and URL inside of .env then import them

class Summoner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      api: {}
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      //   .then(res => console.log(res))
      .then(
        res => {
          console.log(res);
          this.setState(
            {
              isLoaded: true,
              api: res
            },
            () => {
              console.log(res.api);
            }
          );
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    console.log(this.state.api);
    const { error, isLoaded, api } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <div className="name">{api.name}</div>
        </ul>
      );
    }
  }
}
export default Summoner;
