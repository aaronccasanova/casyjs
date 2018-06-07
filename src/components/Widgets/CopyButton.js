import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const FormWrapper = styled.form`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300');
  overflow: hidden;
  background: #fdfdfd;
  width: 95px;
  height: 50px;
  position: relative;

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fdfdfd;
    /* background: #efefef; */
  }
`;

const HiddenInput = styled.textarea`
  z-index: -1;
  width: 110%;
  height: 110%;
  color: #efefef;
`;

const ScissorAni = keyframes`
  0% {
    transform: rotate(90deg) translate(1px, -3px) scaleX(1);
  }
  
  50%{
    transform: rotate(90deg) translate(1px, -3px) scaleX(0.08); 
  }
  
  100% {
   transform: rotate(90deg) translate(1px, -3px) scaleX(1);
  }
`;

const Button = styled.button`
  overflow: hidden;
  cursor: pointer;
  z-index: 2;
  font-family: 'Poppins', sans-serif;
  width: 110%;
  height: 110%;
  color: #5b5b5b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  padding: 5px;

  span {
    /* display: inline-block; */
    font-size: ${props => (props.status === 'Copy' ? '13px' : '16px')};
    transform: ${props =>
      props.status === 'Copy'
        ? 'rotate(90deg) translate(1px, -3px) scaleX(1)'
        : 'rotate(0) translate(4px, 0) scaleX(1)'};
    filter: brightness(37%);
  }
  &:hover span {
    animation: ${props =>
      props.status === 'Copy' ? `${ScissorAni} 290ms linear` : null};
  }
`;

class CopyButton extends Component {
  state = {
    id: '',
    code: '',
    status: 'Copy',
    icon: '✂️'
  };

  componentWillMount() {
    let idArr = this.props.id.split('/');
    let id = `${idArr[0]}/${idArr[1]}/${idArr[1]}`;
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
      status: 'Copied',
      icon: '✓'
    });
  };

  componentWillUnmount() {
    this.setState({
      id: '',
      code: '',
      status: 'Copy',
      icon: '✂️'
    });
  }

  render() {
    return (
      <div>
        <FormWrapper onSubmit={e => this.copyToClipboard(this.props.id, e)}>
          <HiddenInput type="text" value={this.state.code} readOnly />
          <Button status={this.state.status}>
            {this.state.status}
            <span role="img" aria-label="Cut Copy Paste Icon">
              ️{this.state.icon}
            </span>
          </Button>
        </FormWrapper>
      </div>
    );
  }
}

export default CopyButton;
