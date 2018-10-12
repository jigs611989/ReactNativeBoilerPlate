import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Metrics,
  ApplicationStyles,
  Colors,
  Fonts,
} from '../../Themes';

export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: Colors.bloodOrange,
    alignSelf: 'center',
    marginVertical: Metrics.marginVertical,
  },
  logoutText: {
    color: Colors.eggplant,
    textTransform: 'uppercase',
    fontFamily: Fonts.type.bold,
    paddingHorizontal: Metrics.doubleBaseMargin,
  },
});
