import { Colors, Theme } from './styles';

// https://itnext.io/testing-react-16-3-components-with-react-test-renderer-without-enzyme-d9c65d689e88

jest.unmock('react-native');

describe('styles', () => {
  describe('Colors enum', () => {
    it('should have `CrossLightBlue` enum with value "#057dc2"', () => {
      expect(Colors.CrossLightBlue).toEqual('#057dc2');
    });

    it('should have `CrossDarkBlue` enum with value "#057dc2"', () => {
      expect(Colors.CrossDarkBlue).toEqual('#00539b');
    });

    it('should have `CrossYellow` enum with value "#fede00"', () => {
      expect(Colors.CrossYellow).toEqual('#fede00');
    });

    it('should have `CrossDarkBlue` enum with value "#057dc2"', () => {
      expect(Colors.CrossDarkBlue).toEqual('#00539b');
    });

    it('should have `CrossDarkBlue` enum with value "#057dc2"', () => {
      expect(Colors.CrossDarkBlue).toEqual('#00539b');
    });
  });

  describe('Theme const', () => {
    it('should have `roundness` property with value `4`', () => {
        expect(Theme.roundness).toEqual(4);
      });
  });
});
