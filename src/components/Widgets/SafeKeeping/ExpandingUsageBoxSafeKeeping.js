import React, { Component } from 'react';
import styled from 'styled-components';
import CopyButton from './CopyButton';
import UsageButton from './UsageButton';
import axios from 'axios';
import SyntaxHighlighter, {
  registerLanguage
} from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import prism from 'react-syntax-highlighter/styles/prism/prism';

registerLanguage('jsx', jsx);

const CodeWrapper = styled.div`
  padding: 15px 15px 5px;
  /* padding: 40px 15px 5px; */
`;

const CTAWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 25px;

  > * {
    margin: 0 10px;
  }
`;

const X = styled.div`
  margin-right: auto;
  padding: 10px;
  font-size: 23px;
  cursor: pointer;
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  font-size: calc(13px + (18 - 13) * (100vmin - 320px) / (750 - 320));
  width: 100%;
  height: 200px;
`;

class ExpandingUsageBox extends Component {
  state = {
    id: '',
    code: '',
    status: 'Usage'
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
      <CodeWrapper>
        <CTAWrapper>
          <X onClick={this.props.exampleActive}>X</X>
          <CopyButton id={this.props.id} />
          <UsageButton id={this.props.id} />
        </CTAWrapper>
        <StyledSyntaxHighlighter
          language={'jsx'}
          style={prism}
          // customStyle={{ fontSize: '20px' }}
        >
          {this.state.code}
        </StyledSyntaxHighlighter>
      </CodeWrapper>
    );
  }
}

export default ExpandingUsageBox;
