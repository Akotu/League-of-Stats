/* eslint-disable */
import React, { Component } from "react";
import SummonerName from "../../components/stats/SummonerName";
import SummonerLevel from "../../components/stats/SummonerLevel";
import SummonerID from "../../components/stats/SummonerID";
import SearchedName from "../../pages/home/searchedName";

var apiKey = process.env.REACT_APP_API_KEY;
var s_toSearch = SearchedName;
var URL = process.env.REACT_APP_URL + s_toSearch + "?api_key=" + apiKey;

class Summoner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      api: {}
    };
  }
  
  fetchData = () => {
    if (/^[0-9\\p{L} _\\.]+$/.test(s_toSearch)) {
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
    } else {
      return alert(s_toSearch + "does not meet Leagues name parameters");
    }
  };

  render() {
    const { error, isLoaded, api } = this.state;
    let name = api.name;
    let sumId = api.id;
    let level = api.summonerLevel;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <SummonerName sumName={name} />
          <SummonerLevel sumLevel={level} />
          <SummonerID sumID={sumId} />
        </div>
      );
    }
  }
}
export default Summoner;

// export function SummonerID(props) {
//   return <div>{props.id}</div>;
// }
