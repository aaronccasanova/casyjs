import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { injectGlobal } from 'styled-components';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Raleway:300,400,500');
:root {
  --pri-color: #79bec6;
  --pri-hover: #5d9ba2;
  --sec-color: #f5d77c;
  --sec-hover: #e8c766;
  --pri-off-white: #f9f9f9;
  --black: #3b3c36;
  --light-grey: #e6e6e6;
  box-sizing: border-box;
  overflow-x: hidden;
}

:focus {
  outline: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: 100;
}

*::before,
*::after {
  box-sizing: border-box;
}
`;

ReactDOM.render(<App />, document.getElementById('root'));
