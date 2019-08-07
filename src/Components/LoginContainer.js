import React from 'react';
import PropTypes from 'prop-types';
import Store from '../Store/Store';
import Login from './Login';

function LoginContainer(props) {
  return (
    <Store.Consumer>
      {store => (
        <Login
          onLogin={store.onLogin}
          closeModal={props.closeModal}
          changeModal={props.changeModal}
        />
      )}
    </Store.Consumer>
  );
}

LoginContainer.propTypes = {
  closeModal: PropTypes.func.isRequired,
  changeModal: PropTypes.func.isRequired,
};

export default LoginContainer;
