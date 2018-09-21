/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";

const styles = theme => ({
  container: {
    display: "block",
    flexWrap: "wrap",
    marginBottom: "30px"
  },
  margin: {
    margin: theme.spacing.unit,
    width: "50%"
  },
  cssLabel: {
    "&$cssFocused": {
      color: yellow[700],
      fontSize: 30
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: yellow[700],
      fontSize: 30
    }
  },
  bootstrapRoot: {
    padding: 20,
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 30,
    padding: "30px 12px",
    width: "300px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  bootstrapFormLabel: {
    fontSize: 40
  }
});

const theme = createMuiTheme({
  palette: {
    primary: yellow
  }
});

function SearchBar(props) {
  const { classes } = props;

  return (
    <div className="searchBar">
      <div className={classes.container}>
        <FormControl className={classes.margin}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
            htmlFor="Username"
            style={{ color: "#937341" }}
          >
            Username
          </InputLabel>
          <Input
            classes={{
              underline: classes.cssUnderline
            }}
            id="custom-css-input"
          />
        </FormControl>
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
