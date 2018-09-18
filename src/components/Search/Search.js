import React from 'react'
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

class Search extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: ''
    }
  }

  handleChange (e) {
    this.setState({ value: e.target.value })
  }

  render () {
    return (
      <Form>
        <FormGroup controlId='formBasicText'>
          <FormControl
            type='text'
            value={this.state.value}
            placeholder='league name'
            onChange={this.handleChange}
          />
        </FormGroup>
      </Form>
    )
  }
}

export default Search