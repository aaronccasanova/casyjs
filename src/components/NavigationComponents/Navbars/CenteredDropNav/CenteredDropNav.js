import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HamToXToggle from '../../NavTogglers/HamToX/HamToXToggle';

const Wrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --nav-height: 120px;
  --underline-gap: 150%;
  --box-shadow: 0 0 12px rgba(0, 0, 0, 0.17);
  /* -------------------------------- */
  width: 100%;
  min-height: var(--nav-height);
  box-shadow: var(--box-shadow);
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    box-shadow: 0 0;
  }
`;

const NavBar = styled.div`
  background: white;
  width: 100%;
  min-height: var(--nav-height);
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    box-shadow: var(--box-shadow);
    z-index: 1;
  }
`;

const ToggleBtnWrapper = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
    padding: 20px;
  }
`;

const Logo = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::after {
    content: '';
    background: var(--light-grey);
    position: absolute;
    width: 250px;
    height: 2px;
    top: 170%;
    left: 50%;
    transform: translateX(-50%) scale(1, 1);
    transition: all 360ms cubic-bezier(0.67, -0.35, 0.48, 0.79);
  }

  ${Wrapper}:hover &::after {
    transform: translateX(-50%) scale(2.4, 1);
  }

  @media (max-width: 960px) {
    &::after {
      display: none;
    }
  }
`;

const LogoLink = styled(Link)`
  color: var(--black);
  text-decoration: none;
`;

const LinksWrapper = styled.ul`
  text-align: center;
  list-style: none;
  display: flex;
  justify-content: center;
  align-content: center;

  @media (max-width: 960px) {
    box-shadow: 0 -10px 20px 10px rgba(0, 0, 0, 0.274);
    background: #f5f5f5;
    flex-direction: column;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: ${props => (props.showMenu ? '0%' : '50%')};
    transform: ${props =>
      props.showMenu ? 'translateY(100%)' : 'translateY(0%)'};
    transition: all 660ms cubic-bezier(0, 0, 0.34, 1);
  }
`;

const Links = styled(Link)`
  margin-bottom: 20px;
  color: var(--black);
  text-decoration: none;
  display: block;
  padding: 15px;
  font-size: 20px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 960px) {
    padding: 20px;
    border-bottom: 2px solid #e4e4e4;
    margin: 0;

    &:hover {
      background: #e9e9e9;
    }
  }
`;

class CenteredDropNav extends Component {
  state = {
    showMenu: false,
    highBreakCounter: 0,
    lowBreakCounter: 0
  };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  hideMenu = () => {
    if (this.state.showMenu !== false) {
      this.setState({
        showMenu: false
      });
    }
  };

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960) {
        if (this.state.highBreakCounter === 0) {
          this.setState({ lowBreakCounter: 0 });
          this.setState({ highBreakCounter: 1 });
          this.hideMenu();
        }
      }
      if (window.innerWidth < 960) {
        if (this.state.lowBreakCounter === 0) {
          this.setState({ highBreakCounter: 0 });
          this.setState({ lowBreakCounter: 1 });
          this.hideMenu();
        }
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = e => {
    // if menu is open check if click is inside or outside
    if (this.state.showMenu) {
      if (this.node.contains(e.target)) {
        // the click is inside, continue whatever your doing
        return;
      }

      // the click is outside, do something
      this.handleClickOutSide();
    }
  };

  handleClickOutSide = () => {
    this.setState({
      showMenu: false
    });
  };

  createLinksWrapper = () => {
    return this.props.routes.map((route, i) => {
      if (route.path) {
        return (
          <li key={i}>
            <Links to={`${route.path}`} onClick={this.hideMenu}>
              {route.name}
            </Links>
          </li>
        );
      }
      return null;
    });
  };

  render() {
    return (
      <div ref={node => (this.node = node)}>
        <Wrapper>
          <NavBar>
            <ToggleBtnWrapper onClick={this.toggleMenu}>
              <HamToXToggle
                toggleActive={this.state.showMenu}
                width="30px"
                height="21px"
                thickness="2px"
              />
            </ToggleBtnWrapper>
            <Logo onClick={this.hideMenu}>
              <LogoLink to={this.props.routes[0].path}>
                {this.props.logo}
              </LogoLink>
            </Logo>
          </NavBar>
          <LinksWrapper showMenu={this.state.showMenu}>
            {this.createLinksWrapper()}
          </LinksWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default CenteredDropNav;
