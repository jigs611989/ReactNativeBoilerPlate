import React, { Component } from 'react'
import { Container, Content, Text, Input, Item, Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  loginUser = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.navigation.navigate('MainStack');
    }
  }
  
  render () {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>LoginScreen</Text>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
