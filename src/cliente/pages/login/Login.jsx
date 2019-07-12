import React from 'react';
import injectSheet from 'react-jss';
import Input from "./components/input/Input";
import Button from "../../components/button/Button";
import {FaFacebookF, FaGoogle} from 'react-icons/fa';
import * as firebase from 'firebase';
import {withRouter} from 'react-router-dom';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  login: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 10,
    width: theme.spacing.unit * 60,
    height: theme.spacing.unit * 90,
    border: [2, 'solid', theme.borderColor.box],
    borderRadius: theme.spacing.unit * 2,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: theme.font.size.title * 1.5,
    fontWeight: 'bold'
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonLogin: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing.unit * 3,
  },
  buttonsNetwork: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  buttonsGoogle: {
    backgroundColor: theme.background.buttonGoogle,
    borderColor: theme.background.buttonGoogle,
  },
  buttonsFacebook: {
    backgroundColor: theme.background.buttonFacebook,
    borderColor: theme.background.buttonFacebook,
  },
  iconButton: {
    display: 'flex',
    fontSize: theme.spacing.unit * 5,
    color: theme.color.font.button,
    alignItems: 'center',
  },
  [`@media (min-width: ${theme.spacing.tablet}px)`]: {},
  [`@media (min-width: ${theme.spacing.desktop}px)`]: {
    login: {
      marginTop: theme.spacing.unit * 15,
      width: theme.spacing.unit * 90,
      height: theme.spacing.unit * 100,
    },
    title: {
      fontSize: theme.font.size.title * 2.5,
    },
  }
})

const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerGoogle = new firebase.auth.GoogleAuthProvider();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }

  onClickLogin = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.user, this.state.password)
      .then(function (e) {
        window.location.href = '/';
      }).catch(function (error) {
        window.location.href = '/login';
    });
  }

  onClickFacebook = () => {
    firebase.auth().signInWithPopup(providerFacebook).then(function (result) {
      let token = result.credential.accessToken;
      let user = result.user;
      console.log(user);
    }).catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
  }

  onClickGoogle = () => {
    firebase.auth().signInWithPopup(providerGoogle).then(function (result) {
      let token = result.credential.accessToken;
      let user = result.user;
    }).catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.login}>
          <div className={classes.title}>
            Iniciar Sesión
          </div>
          <div className={classes.input}>
            <Input type={'text'} placeholder={'user'} name={'user'} onChange={this.handleChange}>
              <p>Usuario: </p>
            </Input>
          </div>
          <div className={classes.input}>
            <Input type={'password'} placeholder={'password'} name={'password'} onChange={this.handleChange}>
              <p>Password: </p>
            </Input>
          </div>
          <div className={classes.buttonLogin}>
            <Button name={'Ingresar'} onClick={this.onClickLogin}>
            </Button>
          </div>
          <div className={classes.buttonsNetwork}>
            <Button styles={classes.buttonsFacebook} stylesIcon={classes.iconButton}
                    name={'Facebook'} onClick={this.onClickFacebook}>
              <FaFacebookF/>
            </Button>
            <Button styles={classes.buttonsGoogle} stylesIcon={classes.iconButton}
                    name={'Google'} onClick={this.onClickGoogle}>
              <FaGoogle/>
            </Button>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(injectSheet(styles)(Login));
