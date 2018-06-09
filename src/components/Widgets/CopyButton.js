import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const FormWrapper = styled.form`
  /* ---- CSS Variables Section ----- */
  --color: transparent;
  /* -------------------------------- */
  @import url('https://fonts.googleapis.com/css?family=Poppins:300');
  cursor: pointer;
  overflow: hidden;
  background: var(--color);
  width: 95px;
  height: 50px;
  position: relative;

  & > * {
    background: var(--color);
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
  z-index: 1;
  width: 110%;
  height: 110%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  padding-left: 22px;
`;

const ScissorAni = keyframes`
  0% {
    transform: rotate(90deg) translateX(-50%) scaleX(1);
  }
  
  50%{
    transform: rotate(90deg) translateX(-50%) scaleX(0.08); 
  }
  
  100% {
    transform: rotate(90deg) translateX(-50%) scaleX(1);
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 48%;
  right: 22px;
  z-index: 2;
  font-size: ${props => (props.status === 'Copy' ? '13px' : '16px')};
  transform: ${props =>
    props.status === 'Copy'
      ? 'rotate(90deg) translateX(-50%) scaleX(1)'
      : 'rotate(0) translate(10px, -50%) scaleX(1)'};
  filter: brightness(37%);

  ${FormWrapper}:hover & {
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
          <Button status={this.state.status}>{this.state.status}</Button>
          <Icon
            status={this.state.status}
            role="button"
            aria-label="Cut Copy Paste Icon"
          >
            {this.state.icon}
          </Icon>
        </FormWrapper>
      </div>
    );
  }
}

export default CopyButton;
