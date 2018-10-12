import EStyleSheet from 'react-native-extended-stylesheet';
import {
  ApplicationStyles,
  Colors,
  Fonts,
  Metrics,
} from '../../Themes';

export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  content: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  titleText: {
    color: Colors.snow,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h1,
    textAlign: 'center',
  },
  formStyle: {
    flex: 1,
    marginTop: Metrics.screenHeight / 4,
    marginHorizontal: Metrics.doubleBaseMargin,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: Colors.bloodOrange,
    alignSelf: 'center',
    marginVertical: Metrics.marginVertical,
  },
  loginText: {
    color: Colors.eggplant,
    textTransform: 'uppercase',
    fontFamily: Fonts.type.bold,
  },
});
