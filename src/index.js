import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { injectGlobal } from 'styled-components';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Raleway:300,400,500');
:root {
  --cp-pri-color: #79bec6;
  --cp-pri-hover: #5d9ba2;
  --cp-sec-color: #f5d77c;
  --cp-sec-hover: #e8c766;
  --cp-off-white: #f9f9f9;
  --cp-black: #3b3c36;
  --cp-light-grey: #e6e6e6;
  --cp-grey: #a9a9a9;
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
  color: var(--cp-black);
}

*::before,
*::after {
  box-sizing: border-box;
}
`;

ReactDOM.render(<App />, document.getElementById('root'));
