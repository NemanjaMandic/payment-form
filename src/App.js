import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MaskedInput from "react-text-mask";

class App extends Component {
  render() {
    const { inputRef, ...other } = this.props;

    return (
      <>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-full-width"
            label="Ime"
            error
            helperText="Kurcina"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="outlined-full-width"
            label="Prezime"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="outlined-bare"
            // className={classes.textField}
            defaultValue="Bare"
            margin="normal"
            variant="outlined"
          />
          <MaskedInput
            {...other}
            label="Ime"
            mask={[
              "(",
              /[1-9]/,
              /\d/,
              /\d/,
              ")",
              " ",
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              /\d/,
              /\d/
            ]}
            placeholderChar={"\u2000"}
            showMask
          />
        </form>
      </>
    );
  }
}

export default App;
