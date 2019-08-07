import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div``;

const StyleA = styled.a``;

class Join extends Component {
  loginModal = num => {
    const { changeModal } = this.props;
    changeModal(num);
  };

  render() {
    return (
      <>
        <Container>
          <StyleA href="#" onClick={() => this.loginModal(1)}>
            로그인화면으로
          </StyleA>
        </Container>
      </>
    );
  }
}

Join.propTypes = {
  changeModal: PropTypes.func.isRequired,
};

export default Join;
