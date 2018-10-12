import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import {
  Container,
  Content,
  Input,
  Item,
  Text,
  Button,
} from 'native-base';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle';
import { Colors } from '../Themes';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  loginUser = () => {
    const { username, password } = this.state;
    const { navigation } = this.props;
    if (username !== '' && password !== '') {
      navigation.navigate('MainStack');
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <Container style={styles.mainContainer}>
        <Content style={styles.content}>
          <SafeAreaView>
            <Text style={styles.titleText}>
              Login
            </Text>
            <View style={styles.formStyle}>
              <Item style={styles.inputBox}>
                <Input
                  placeholder="Username"
                  value={username}
                  onChangeText={u => this.setState({ username: u })}
                  autoCapitalize="none"
                  placeholderTextColor={Colors.ricePaper}
                  returnKeyType="next"
                  onSubmitEditing={() => this.passwordRef._root.focus()}
                  selectionColor={Colors.banner}
                  style={styles.inputStyle}
                  underlineColorAndroid="transparent"
                />
              </Item>
              <Item style={styles.inputBox}>
                <Input
                  placeholder="Password"
                  ref={(p) => {
                    this.passwordRef = p;
                  }}
                  value={password}
                  onChangeText={p => this.setState({ password: p })}
                  autoCapitalize="none"
                  placeholderTextColor={Colors.ricePaper}
                  returnKeyType="go"
                  onSubmitEditing={this.loginUser}
                  selectionColor={Colors.banner}
                  style={styles.inputStyle}
                  underlineColorAndroid="transparent"
                  secureTextEntry
                />
              </Item>
              <Button
                style={styles.loginButton}
                onPress={this.loginUser}
                disabled={username === '' && password === ''}
              >
                <Text style={styles.loginText}>Login</Text>
              </Button>
            </View>
          </SafeAreaView>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
