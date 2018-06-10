import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormWrapper = styled.form`
  /* ---- CSS Variables Section ----- */
  --color: transparent;
  /* --color: #f5f2f0; */
  /* -------------------------------- */
  @import url('https://fonts.googleapis.com/css?family=Poppins:300');
  cursor: pointer;
  overflow: hidden;
  background: var(--color);
  width: calc(80px + (120 - 80) * (100vmin - 320px) / (750 - 320));
  height: calc(25px + (50 - 25) * (100vmin - 320px) / (750 - 320));
  position: relative;
  border-radius: 5px;
  border: 1px solid var(--cp-black);
  opacity: 0.5;
  transition: opacity 250ms;

  & > * {
    background: var(--color);
  }

  &:hover {
    opacity: 1;
  }
`;

const HiddenInput = styled.textarea`
  opacity: 0;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 110%;
  height: 110%;
  color: var(--cp-black);
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: calc(12px + (18 - 12) * (100vmin - 320px) / (750 - 320));
`;

class UsageButton extends Component {
  state = {
    id: '',
    code: '',
    status: 'Copy'
  };

  componentWillMount() {
    let idArr = this.props.id.split('/');
    let id = `${idArr[0]}/${idArr[1]}/${idArr[1]}Example`;
    if (id !== this.state.id) {
      axios
        .get(
          `https://raw.githubusercontent.com/cpcomponents/cpcomponents/master/src/components/${id}.js`
        )
        .then(res => {
          let code = res.data;
          // console.log(code);
          this.setState({
            id: this.props.id,
            code
          });
        })
        .catch(err => console.log(err));
    }
  }

  copyToClipboard = (id, e) => {
    e.preventDefault();
    let input = e.target.children[0];
    input.select();
    document.execCommand('copy');
    this.setState({
      status: 'Copied'
    });
  };

  componentWillUnmount() {
    this.setState({
      id: '',
      code: '',
      status: 'Copy'
    });
  }

  render() {
    return (
      <div>
        <FormWrapper onSubmit={e => this.copyToClipboard(this.props.id, e)}>
          <HiddenInput
            type="text"
            value={this.props.usage || this.state.code}
            readOnly
          />
          <Button>{this.state.status}</Button>
        </FormWrapper>
      </div>
    );
  }
}

export default UsageButton;
