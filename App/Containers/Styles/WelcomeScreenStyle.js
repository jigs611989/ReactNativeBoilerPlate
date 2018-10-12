import EStyleSheet from 'react-native-extended-stylesheet';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes';

export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  content: {
    flex: 1,
    // justifyContent: 'center',
  },
  welcomeText: {
    marginTop: Metrics.screenHeight / 2.6,
    marginBottom: '5%',
    color: Colors.text,
    fontSize: Fonts.size.h1,
    alignSelf: 'center',
  },
  getStartedButton: {
    alignSelf: 'center',
    backgroundColor: Colors.bloodOrange,
    borderRadius: 20,
  },
  getStartedText: {
    color: Colors.eggplant,
    textTransform: 'uppercase',
  },
});
