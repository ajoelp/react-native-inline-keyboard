import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Language from './languages/en';
import LetterButton from './LetterButton';

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

  const letterButtonProps = {
    letterButtonStyles,
    letterButtonFocusStyles,
    letterButtonTextStyles,
  };

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
          <LetterButton
            {...letterButtonProps}
            onPress={toggleShowSymbols}
            testID={'symbols-button'}
          >
            123
          </LetterButton>
          {Language.letters.map(letter => {
            return (
              <LetterButton
                {...letterButtonProps}
                testID={`letter-${letter}`}
                key={letter}
                onPress={addLetter(letter)}
              >
                {letter.toUpperCase()}
              </LetterButton>
            );
          })}
          <LetterButton
            {...letterButtonProps}
            testID={'space-button'}
            onPress={addLetter(' ')}
          >
            {'space'.toUpperCase()}
          </LetterButton>
          <LetterButton
            {...letterButtonProps}
            testID={'delete-button'}
            onPress={backspace}
          >
            {'backspace'.toUpperCase()}
          </LetterButton>
          <LetterButton {...letterButtonProps} onPress={clear}>
            {'clear'.toUpperCase()}
          </LetterButton>
        </View>
        {showSymbols && (
          <View style={letterContainerStyles}>
            {Language.symbols.map(letter => {
              return (
                <LetterButton
                  {...letterButtonProps}
                  testID={`symbol-${letter}`}
                  key={letter}
                  onPress={addLetter(letter)}
                >
                  {letter.toUpperCase()}
                </LetterButton>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};

export default InlineKeyboard;
