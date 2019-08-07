import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import PropTypes from 'prop-types';
import ToggleDisplay from 'react-toggle-display';
import Join from './Join';
import LoginContainer from './LoginContainer';

const Container = styled.div`
  background-color: white;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Wrapper = styled.div`
  padding-top: 1%;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  max-width: 95%;
  display: table;
`;

const Logo = styled.div`
  display: table-cell;
  width: 10%;
`;

const Nav = styled.div`
  display: table-cell;
  width: 90%;
`;

const NavList = styled.ul`
  display: table;
  width: 40%;
`;

const NavItem = styled.li`
  display: table-cell;
  width: 5%;
  :last-child {
    color: blue;
  }
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: black;
`;

const ModalPop = styled.div``;

const ModalClose = styled.a``;

class Header extends Component {
  state = {
    visible: false,
    show: false,
    modalNum: 1,
  };

  openModal = () => {
    this.setState({
      visible: true,
    });
  };

  closeModal = () => {
    this.setState({
      visible: false,
    });
  };

  changeModal = num => {
    this.setState({
      modalNum: num,
    });
  };

  handleClick = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  };

  render() {
    const { visible, show, modalNum } = this.state;
    const { logged, onLogout } = this.props;
    return (
      <Container>
        <Wrapper>
          <Logo className="fas fa-draw-polygon" />
          <Nav>
            <NavList>
              <NavItem>
                <StyledLink to="/search">공간찾기</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/place/manage">공간관리</StyledLink>
              </NavItem>
              {logged ? (
                <NavItem>
                  <StyledLink to="/" onClick={this.handleClick}>
                    정보수정
                  </StyledLink>
                  <ToggleDisplay show={show} tag="section">
                    <StyledLink to="/" onClick={onLogout}>
                      로그아웃
                    </StyledLink>
                  </ToggleDisplay>
                </NavItem>
              ) : (
                // <NavItem>
                // </NavItem>
                <NavItem onClick={() => this.openModal()}>
                  로그인 | 회원가입
                </NavItem>
              )}
            </NavList>
          </Nav>
        </Wrapper>
        <Modal
          visible={visible}
          width="400"
          height="300"
          effect="fadeInDown"
          // onClickAway={() => this.closeModal()}
        >
          <ModalPop>
            <ModalClose onClick={() => this.closeModal()}>Close</ModalClose>
            {modalNum === 1 && (
              <LoginContainer
                closeModal={this.closeModal}
                changeModal={this.changeModal}
              />
            )}
            {modalNum === 2 && <Join changeModal={this.changeModal} />}
          </ModalPop>
        </Modal>
      </Container>
    );
  }
}

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
