import { Dimensions, Platform, StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;

export enum Colors {
  CrossLightBlue = '#057dc2',
  CrossDarkBlue = '#00539b',
  CrossYellow = '#fede00',
  CrossBlack = '#2f2f2f',
  CrossWhite = 'white',
  CancelButton = '#ff0000',
  NextButton = '#349b34',
  BackButton = '#3180e0',
}

/**
 * Size if icons in tab bars
 * @type int
 * @public
 */
export const TabIconSize: number = Platform.OS === 'android' ? 22 : 22;

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export const slideHeight = viewportHeight * 0.15;
const itemWidth = wp(70);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const slideWidth = itemWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

/**
 * Theme appiled to React-Native-Paper
 *
 * https://callstack.github.io/react-native-paper/theming.html
 */
export const Theme = {
  ...DefaultTheme,
  roundness: 4,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.CrossLightBlue,
    accent: Colors.CrossYellow,
    background: 'white',
    placeholder: Colors.CrossDarkBlue,
    backdrop: 'white',
    disabled: Colors.CrossDarkBlue,
    text: Colors.CrossBlack,
  },
};

export const CarouselStyles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white',
  },
});

/**
 * Main theme for the app
 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  buttonList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  listButton: {
    height: 40,
    flex: 1,
  },
  listItem: {
    margin: 0,
    padding: 0,
  },
  button: {
    marginRight: 10,
    height: 45,
  },
  paddingDefault: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  label: {
    color: 'gray',
    fontSize: 14,
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
  },
  tabIcon: {
    // Icons in tab bar won't show without explicit width / height
    width: 25,
    height: TabIconSize,
    color: 'white',
  },
  absoluteCentered: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  absoluteTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  absoluteTopRight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  absoluteTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  absoluteBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  absoluteBottomRight: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  absoluteBottomLeft: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  centerVerticalAndHorizontal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignCenterJustifyStart: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  alignStartJustifyStart: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  alignEndJustifyStart: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  tabBar: {
    backgroundColor: Colors.CrossLightBlue,
  },
  tabBarTitle: {
    alignSelf: 'center',
  },
  tabBarLabel: {
    fontSize: 9,
  },
  rowContentTopCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rowContentTopLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rowContentTopRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  rowContentCenterLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rowContentBottomCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  columnContentTopCenter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  columnContentTopLeft: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  columnContentTopRight: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  columnContentCenterRight: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  columnContentCenterLeft: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  backgroundWhite: {
    backgroundColor: '#ffffff',
  },
  overlay: {
    backgroundColor: 'rgba(254, 222, 0, 0.3)',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  spinner: {
    width: 50,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    opacity: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  textSpinner: {
    fontSize: 20,
    color: Colors.CrossLightBlue,
    textAlign: 'center',
    fontWeight: 'normal',
    marginTop: 5,
    opacity: 1,
  },
  modal: {
    margin: 30,
    flex: 1,
    padding: 0,
    marginTop: 200,
  },
});

export const autoCompleteStyles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#ffffff',
  // },
  padding: { padding: 20 },
  listView: {
    backgroundColor: '#ffffff',
  },
  textInputContainer: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  textInput: {
    color: '#00539b',
    fontSize: 16,
  },
  description: {
    fontWeight: 'bold',
  },
  predefinedPlacesDescription: {
    color: '#fede00',
  },
});

export const sortableGridImagesStyles = StyleSheet.create({
  block: {
    flex: 1,
    margin: 8.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 9,
  },
  buttonView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageButton: {
    flexDirection: 'row',
  },
  button1: {
    backgroundColor: '#257FE6',
  },
  button2: {
    backgroundColor: '#37AB33',
  },
  buttonText: {
    color: '#fff',
  },
  bottom: {
    width: screenWidth,
    alignSelf: 'center',
    flex: 1,
  },
  cam: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 2,
  },
});

export default styles;
