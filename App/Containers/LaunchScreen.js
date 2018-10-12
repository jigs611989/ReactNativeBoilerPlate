import React, { Component } from 'react';
import {
  ImageBackground, Text, Image, View,
} from 'react-native';
import {
  Container,
  Content,
  Button,
} from 'native-base';
import { Images } from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

class LaunchScreen extends Component {
  logout = () => {
    const { navigation } = this.props;
    navigation.navigate('Auth');
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
            <View style={styles.centered}>
              <Image source={Images.launch} style={styles.logo} />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionText}>
                Welcome to react-native ignite boiler plate!
                We have enabled eslint with airbnb style guide for you!
              </Text>
            </View>
            <Button
              style={styles.logoutButton}
              onPress={this.logout}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </Button>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
export default LaunchScreen;
