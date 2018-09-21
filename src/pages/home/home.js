/* eslint-disable */
import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import Search from "../../components/Search/Search";
import DarkWrapper from "../../components/DarkWrapper/DarkWrapper";
import "./home.css";
import TextField from "@material-ui/core/TextField";
import SearchBar from "../../components/SearchBar/SearchBar";

class Home extends Component {
  state = {
    value: ""
  };

  render() {
    return (
      <DarkWrapper>
        <Grid>
          <img
            src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/multistep-signup/en_US/363b6842fb28ecec94c4bcfdb191bf0c402fdfca/assets/img/divider.png"
            className="goldlogo"
          />

          <button className="search">Search Summoner</button>
        </Grid>
      </DarkWrapper>
    );
  }
}

export default Home;
