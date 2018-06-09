import React, { Component } from 'react';
import styled from 'styled-components';
import UsageButton from './UsageButton';
import axios from 'axios';
import SyntaxHighlighter, {
  registerLanguage
} from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import prism from 'react-syntax-highlighter/styles/prism/prism';

registerLanguage('jsx', jsx);

const Wrapper = styled.div`
  display: ${props => (props.expand ? 'block' : 'none')};
  padding: 15px 15px 5px;
  width: 100%;

  position: relative;
`;

const Heading = styled.h2`
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  font-size: calc(13px + (18 - 13) * (100vmin - 320px) / (750 - 320));
  width: 100%;
  min-height: 200px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const CodeWrapper = styled.div``;

const UsageWrapper = styled.div`
  margin-bottom: 40px;
  position: relative;
`;

const UsageDesc = styled.h2`
  font-weight: 400;
  font-size: calc(13px + (18 - 13) * (100vmin - 320px) / (750 - 320));
`;

class ExpandingUsageBox extends Component {
  state = {
    id: '',
    code: ''
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

  componentWillUnmount() {
    this.setState({
      id: '',
      code: ''
    });
  }

  createCodeBlocks = code => {
    let codeArr = code.split('//');
    return codeArr.map((content, i, arr) => {
      if (i % 2 !== 0) {
        return (
          <div key={i}>
            <UsageDesc>{content}</UsageDesc>
            <UsageWrapper>
              <StyledSyntaxHighlighter language={'jsx'} style={prism}>
                {arr[i + 1]}
              </StyledSyntaxHighlighter>
              <ButtonWrapper>
                <UsageButton id={this.props.id} usage={arr[i + 1]} />
              </ButtonWrapper>
            </UsageWrapper>
          </div>
        );
      }
      return null;
    });
  };

  render() {
    return (
      <Wrapper expand={this.props.expand}>
        {this.state.code ? <Heading>Usage</Heading> : null}
        <CodeWrapper>
          {this.state.code ? this.createCodeBlocks(this.state.code) : null}
        </CodeWrapper>
      </Wrapper>
    );
  }
}

export default ExpandingUsageBox;
