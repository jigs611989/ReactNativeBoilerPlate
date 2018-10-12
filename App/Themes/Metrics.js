import { Dimensions, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: '10rem',
  marginVertical: '10rem',
  section: '25rem',
  baseMargin: '10rem',
  doubleBaseMargin: '20rem',
  smallMargin: '5rem',
  doubleSection: '50rem',
  regularBorderWidth: '1rem',
  doubleBorderWidth: '2rem',
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? '64rem' : '54rem',
  icons: {
    tiny: '15rem',
    small: '20rem',
    medium: '30',
    large: '45rem',
    xl: '50rem',
  },
  images: {
    small: '20rem',
    medium: '40rem',
    large: '60rem',
    logo: '200rem',
  },
  baseWidth: wp('5%'),
  doubleWidth: wp('10%'),
  baseHeight: hp('4%'),
  doubleHeight: hp('10%'),
  buttonHeight: '40rem',
  buttonRadius: '20rem',
};

export default metrics;
