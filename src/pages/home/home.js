/* eslint-disable */
import React, {Component} from "react";
import {Grid, Row, Col, Button} from "react-bootstrap";
import Search from "../../components/Search/Search";
import DarkWrapper from "../../components/DarkWrapper/DarkWrapper";
import "./home.css";
import TextField from "@material-ui/core/TextField";
import SearchBar from "../../components/SearchBar/SearchBar";
import logo from "../../images/los2.png";
import Summoner from "../../components/SummonerAPI/summoner";
import SearchedName from "./searchedName";
import SummonerName from "../../components/stats/SummonerName";
import SummonerLevel from "../../components/stats/SummonerLevel";
import SummonerID from "../../components/stats/SummonerID";
import SummonerRank from '../../components/stats/SummonerRank';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      api: {},
      api2: {},
      value: "",
      id: ''
    };

    this.apiKey = process.env.REACT_APP_API_KEY;

    this.url = 'https://cors-anywhere.herokuapp.com/' + process.env.REACT_APP_URL;

    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  testData = () => {
    console.log(this.s_toSearch);
  };

  fetchData = () => {

    if (!/^[0-9\\p{L} _\\.]+$/.test(this.state.value)) {
      fetch(this.url + this.state.value + "?api_key=" + this.apiKey).then(res => res.json())
      //   .then(res => console.log(res))
        .then(res => {
        console.log(res);
        this.setState({
          isLoaded: true,
          api: res,
          id: res.id
        }, () => {
          console.log(res);
        });
      }, error => {
        this.setState({isLoaded: true, error});
      });
    } else {
      return alert(this.state.value + " does not meet Leagues name parameters");
    }
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchData();
  }

  handleClick(event) {
    console.log(event.target.value);
  }

  handleSearchTermSubmit(event) {
    event.preventDefault();
    this
      .props
      .onSearchTermSubmit(this.textInput.value);
    alert("you enetred: " + this.textInput.value);
  }

  render() {

    const {error, isLoaded, api, value} = this.state;
    let s_toSearch = value
    let name = api.name;
    let sumId = api.id;
    let level = api.summonerLevel;

    return (
      <DarkWrapper>
        <Grid>
          <div className="logo">
            <img src={logo}/>
          </div>
          <img
            src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/multistep-signup/en_US/363b6842fb28ecec94c4bcfdb191bf0c402fdfca/assets/img/divider.png"
            className="goldlogo"/>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              className="searchName"/>

            <label className="text"></label>

            <button value="submit" type="submit" className="search">
              Search Summoner
            </button>

          </form>

          <div className='stats'>
            <SummonerName sumName={name}/>
            <SummonerLevel sumLevel={level}/>
            <SummonerID sumID={sumId}/>

          </div>
        </Grid>
      </DarkWrapper>
    );
  }
}

export default Home;
