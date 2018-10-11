import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/WelcomeScreenStyle'

class WelcomeScreen extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>Welcome</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
