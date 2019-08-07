import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo className="fas fa-draw-polygon" />
        <Nav>
          <NavList>
            <NavItem>
              <Link to="/search">공간찾기</Link>
            </NavItem>
            <NavItem>
              <Link to="/place/manage">공간관리</Link>
            </NavItem>
            <NavItem>
              <Link to="/user">정보수정</Link>
            </NavItem>
            <NavItem>
              <Link to="/login">로그인</Link>
            </NavItem>
            <NavItem>
              <Link to="/logout">로그아웃</Link>
            </NavItem>
            <NavItem>
              <Link to="/join">회원가입</Link>
            </NavItem>
          </NavList>
        </Nav>
      </Wrapper>
    </Container>
  );
}

export default Header;
