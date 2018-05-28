import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormWrapper = styled.form`
  background: white;
  width: 200px;
  height: 60px;
  margin: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #8e8e8e;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.08);

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #efefef;
  }
`;

const HiddenInput = styled.textarea`
  color: #efefef;
`;

const Button = styled.button`
  font-size: 20px;
  width: 100%;
  height: 100%;

  &:hover {
    background: #e4e4e4;
  }
`;
class CopyButton extends Component {
  state = {
    id: '',
    code: '',
    status: 'Copy'
  };

  componentWillMount() {
    let id = this.props.id;
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
          <HiddenInput type="text" value={this.state.code} readOnly />
          <Button>{this.state.status}</Button>
        </FormWrapper>
      </div>
    );
  }
}

export default CopyButton;
