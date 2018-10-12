import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import {
  Button,
  Container,
  Content,
  Text,
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/WelcomeScreenStyle';
import { Images } from '../Themes';

class WelcomeScreen extends Component {
  goToLogin = () => {
    const { navigation } = this.props;
    const navigateAction = NavigationActions.navigate({
      routeName: 'Auth',
      index: 0,
    });
    navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <Container style={styles.mainContainer}>
        <ImageBackground
          source={Images.background}
          imageStyle={{ height: '100%', width: '100%' }}
          style={styles.backgroundImage}
        >
          <Content contentContainerStyle={styles.content}>
            <Text style={styles.welcomeText}>
              Welcome
            </Text>
            <Button
              style={styles.getStartedButton}
              onPress={this.goToLogin}
            >
              <Text style={styles.getStartedText}>Get Started</Text>
            </Button>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
