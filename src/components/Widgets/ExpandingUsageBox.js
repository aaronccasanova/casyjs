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

const CodeWrapper = styled.div`
  display: ${props => (props.expand ? 'block' : 'none')};
  padding: 15px 15px 5px;
  width: 100%;

  position: relative;
`;

const Heading = styled.h2`
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
  right: 25px;
  bottom: 37px;
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

  render() {
    return (
      <CodeWrapper expand={this.props.expand}>
        <Heading>Usage</Heading>
        <StyledSyntaxHighlighter
          language={'jsx'}
          style={prism}
          // customStyle={{ fontSize: '20px' }}
        >
          {this.state.code}
        </StyledSyntaxHighlighter>
        <ButtonWrapper>
          <UsageButton id={this.props.id} />
        </ButtonWrapper>
      </CodeWrapper>
    );
  }
}

export default ExpandingUsageBox;
