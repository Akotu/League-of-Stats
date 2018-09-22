/* eslint-disable */
const router = require("express").Router();
var async = require("async");
var request = require("request");
const path = require("path");

router.use("/api", function(req, res) {
  var data = {};
  var apiKey = "RGAPI-6444045d-d889-4f7d-804a-945def7d0974";
  var s_toSearch = "certatim";
  var URL =
    "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" +
    s_toSearch +
    "?api_key=" +
    apiKey;

  async.waterfall(
    [
      function(re) {
        request(URL, function(err, response, body) {
          if (!err && response.statusCode == 200) {
            var json = JSON.parse(body);
            data.id = json.id;
            data.name = json.name;
            console.log(data);
            re(null, data);
          } else {
            console.log(err);
          }
        });
      }
    ],
    function(err, data) {
      if (err) {
        console.log(err);
        return;
      }
      res.render(path.join(__dirname, "build", "index.html"), {
        info: data
      });
    }
  );
});

module.exports = router;
