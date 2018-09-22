/* eslint-disable */
import React, { Component } from "react";
// import "../../api/league";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      profileIconId: "",
      name: "",
      summonerLevel: "",
      summonerID: "",
      tier: "",
      rank: "",
      leaguePoints: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return <p>I am the player Page</p>;
  }
}

export default Player;
