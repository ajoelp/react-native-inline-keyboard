import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import TVTouchableFeedback from './TVTouchableFeedback';
import Language from './languages/en';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
    padding: 10,
  },
  inputText: {
    color: 'black',
  },
  letterContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  letterButton: {
    padding: 2,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 5,
    backgroundColor: 'transparent',
    marginRight: 5,
  },
  letterButtonFocus: {
    backgroundColor: '#e9e9e9',
  },
  letterText: {
    color: 'black',
  },
});

interface InlineKeyboardProps {
  value: string;
  onChange(text: string): any;
  showInput?: boolean;
  letterContainerStyles?: StyleProp<ViewStyle>;
  letterButtonStyles?: StyleProp<ViewStyle>;
  letterButtonFocusStyles?: StyleProp<ViewStyle>;
  letterButtonTextStyles?: StyleProp<TextStyle>;
}

const InlineKeyboard: React.FC<InlineKeyboardProps> = props => {
  const [showSymbols, setShowSymbols] = React.useState(false);

  const {
    onChange,
    value,
    showInput = false,
    letterContainerStyles = styles.letterContainer,
    letterButtonStyles = styles.letterButton,
    letterButtonFocusStyles = styles.letterButtonFocus,
    letterButtonTextStyles = styles.letterText,
  } = props;

  const toggleShowSymbols = () => {
    setShowSymbols(!showSymbols);
  };

  const addLetter = (letter: string) => () => {
    onChange(`${value}${letter}`);
  };

  const backspace = () => {
    onChange(value.substring(0, value.length - 1));
  };

  const clear = () => {
    onChange('');
  };

  return (
    <View>
      {showInput && (
        <View style={styles.input}>
          <Text style={styles.inputText}>{value || 'Type Something'}</Text>
        </View>
      )}
      <View>
        <View style={letterContainerStyles}>
          <TVTouchableFeedback
            style={letterButtonStyles}
            focusStyles={letterButtonFocusStyles}
            activeOpacity={1}
            onPress={toggleShowSymbols}
            testID={'symbols-button'}
          >
            <Text style={letterButtonTextStyles}>123</Text>
          </TVTouchableFeedback>
          {Language.letters.map(letter => {
            return (
              <TVTouchableFeedback
                testID={`letter-${letter}`}
                style={letterButtonStyles}
                focusStyles={letterButtonFocusStyles}
                activeOpacity={1}
                key={letter}
                onPress={addLetter(letter)}
              >
                <Text style={letterButtonTextStyles}>
                  {letter.toUpperCase()}
                </Text>
              </TVTouchableFeedback>
            );
          })}
          <TVTouchableFeedback
            testID={'space-button'}
            style={letterButtonStyles}
            focusStyles={letterButtonFocusStyles}
            activeOpacity={1}
            onPress={addLetter(' ')}
          >
            <Text style={letterButtonTextStyles}>{'space'.toUpperCase()}</Text>
          </TVTouchableFeedback>
          <TVTouchableFeedback
            testID={'delete-button'}
            style={letterButtonStyles}
            focusStyles={letterButtonFocusStyles}
            activeOpacity={1}
            onPress={backspace}
          >
            <Text style={letterButtonTextStyles}>
              {'backspace'.toUpperCase()}
            </Text>
          </TVTouchableFeedback>
          <TVTouchableFeedback
            style={letterButtonStyles}
            focusStyles={letterButtonFocusStyles}
            activeOpacity={1}
            onPress={clear}
          >
            <Text style={letterButtonTextStyles}>{'clear'.toUpperCase()}</Text>
          </TVTouchableFeedback>
        </View>
        {showSymbols && (
          <View style={letterContainerStyles}>
            {Language.symbols.map(letter => {
              return (
                <TVTouchableFeedback
                  testID={`symbol-${letter}`}
                  style={letterButtonStyles}
                  focusStyles={letterButtonFocusStyles}
                  activeOpacity={1}
                  key={letter}
                  onPress={addLetter(letter)}
                >
                  <Text style={letterButtonTextStyles}>
                    {letter.toUpperCase()}
                  </Text>
                </TVTouchableFeedback>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};

export default InlineKeyboard;
