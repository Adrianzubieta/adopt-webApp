import React from 'react';
import injectSheet from 'react-jss';
import Input from "./components/input/Input";
import Button from "../../components/button/Button";
import {FaFacebookF, FaGoogle} from 'react-icons/fa';
import * as firebase from 'firebase';

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
    height: theme.spacing.unit * 150,
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
    color: theme.color.font.button,
    alignItems: 'center',
  },
  [`@media (min-width: ${theme.spacing.tablet}px)`]: {},
  [`@media (min-width: ${theme.spacing.desktop}px)`]: {
    login: {
      width: theme.spacing.unit * 90,
      height: theme.spacing.unit * 180,
    },
    title: {
      fontSize: theme.font.size.title * 2.5,
    },
    iconButton: {
      fontSize: theme.spacing.unit * 5,
    }
  }
})

const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerGoogle = new firebase.auth.GoogleAuthProvider();

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      email: '',
      retryPassword: '',
    };
  }

  onClickLogin = (e) => {
    console.log('login')
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
        console.log('error')
        console.log(error)
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onClickFacebook = () => {
    console.log('face')
    firebase.auth().signInWithPopup(providerFacebook).then(function (result) {
      window.location.href = '/login';
      let user = result.user;
      console.log(user);
      console.log(user.phoneNumber);
      console.log(user.emailVerified);
      console.log(user.displayName);
      console.log(user.email);
      console.log(user.photoURL);
      console.log(user.isAnonymous);
    }).catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
  }

  onClickGoogle = () => {
    console.log('google')
    firebase.auth().signInWithPopup(providerGoogle).then(function (result) {
      window.location.href = '/login';
      let user = result.user;
      console.log(user);
      console.log(user.phoneNumber);
      console.log(user.emailVerified);
      console.log(user.displayName);
      console.log(user.email);
      console.log(user.photoURL);
      console.log(user.isAnonymous);
    }).catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
  }


  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
          <div className={classes.login}>
            <div className={classes.title}>
              Completá tus datos
            </div>
            <div className={classes.input}>
              <Input type={'text'} placeholder={'Nombre y Apellido'} name={'user'} onChange={this.handleChange}>
                <p>Nombre y Apellido: </p>
              </Input>
            </div>
            <div className={classes.input}>
              <Input type={'email'} placeholder={'email'} name={'email'} onChange={this.handleChange}>
                <p>Email: </p>
              </Input>
            </div>
            <div className={classes.input}>
              <Input type={'password'} placeholder={'password'} name={'password'} onChange={this.handleChange}>
                <p>Password: </p>
              </Input>
            </div>
            <div className={classes.input}>
              <Input type={'password'} placeholder={'Repetir password'} name={'retryPassword'} onChange={this.handleChange}>
                <p>Repetir Password: </p>
              </Input>
            </div>
            <div className={classes.buttonLogin}>
              <Button name={'Crear Cuenta'} onClick={this.onClickLogin} >
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

export default injectSheet(styles)(Register);