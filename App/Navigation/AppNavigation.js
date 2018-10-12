import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import WelcomeScreen from '../Containers/WelcomeScreen';
import LoginScreen from '../Containers/LoginScreen';
import LaunchScreen from '../Containers/LaunchScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const WelcomeStack = createStackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
},
{
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'WelcomeScreen',
  navigationOptions: {
    headerStyle: styles.header,
  },
});
const LoginStack = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
},
{
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
});

const MainStack = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
},
{
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
});

const PrimaryNav = createSwitchNavigator({
  Welcome: WelcomeStack,
  Auth: LoginStack,
  MainStack,
}, {
  // Default config for all screens
  initialRouteName: 'Welcome',
});

export default PrimaryNav;
