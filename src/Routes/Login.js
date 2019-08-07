import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LoginContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;

const KakaoButton = styled(KakaoLogin)`
  display: inline-block;
  padding: 0;
  width: 222px;
  height: 49px;
  line-height: 49px;
  color: #3c1e1e;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  :hover {
    box-shadow: 0 1px rgba(0, 0, 0, 0.12), 0 2px rgba(0, 0, 0, 0.24);
  }
`;

const StyleA = styled.a``;

class Login extends Component {
  state = {
    id: 0,
    name: '',
    email: '',
    imgUrl: '',
  };

  responseGoogle = res => {
    const {
      profileObj: { googleId: id, name, email, imageUrl: imgUrl },
    } = res;

    this.fnSetState(id, name, email, imgUrl);
  };

  responseKakao = res => {
    const {
      profile: {
        id,
        kakao_account: { email },
        properties: { nickname: name, profile_image: imgUrl },
      },
    } = res;

    this.fnSetState(id, name, email, imgUrl);
  };

  fnSetState = (id, name, email, imgUrl) => {
    this.setState({
      id,
      name,
      email,
      imgUrl,
    });

    const { closeModal } = this.props;
    closeModal();
  };

  responseFail = err => {
    console.log(err);
  };

  joinModal = num => {
    const { changeModal } = this.props;
    changeModal(num);
  };

  render() {
    const { id, name, email, imgUrl } = this.state;
    console.log(id, name, email, imgUrl);

    return (
      <>
        <h1>로그인 화면입니다</h1>
        <p>Some Contents</p>
        <LoginContainer>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_API_KEY}
            buttonText="Google Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseFail}
          />
          <KakaoButton
            jsKey={process.env.REACT_APP_KAKAO_API_KEY}
            buttonText="Kakao Login"
            onSuccess={this.responseKakao}
            onFailure={this.responseFail}
            getProfile="true"
          />
        </LoginContainer>
        <StyleA href="#" onClick={() => this.joinModal(2)}>
          회원가입
        </StyleA>
      </>
    );
  }
}

Login.propTypes = {
  closeModal: PropTypes.func.isRequired,
  changeModal: PropTypes.func.isRequired,
};

export default Login;
