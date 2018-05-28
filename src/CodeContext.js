import React, { Component } from 'react';
import axios from 'axios';

export const CodeContext = React.createContext();

export class CodeProvider extends Component {
  state = {
    test: ''
  };

  fetchCode = () => {
    axios
      .get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(res => console.log(res.data[0]))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <CodeContext.Provider
        value={{
          state: this.state,
          fetchCode: this.fetchCode
        }}
      >
        {this.props.children}
      </CodeContext.Provider>
    );
  }
}
