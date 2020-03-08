import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
}

const InlineKeyboard: React.FC<InlineKeyboardProps> = ({ onChange, value }) => {
  const [showSymbols, setShowSymbols] = React.useState(false);

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
      <View style={styles.input}>
        <Text style={styles.inputText}>{value || 'Type Something'}</Text>
      </View>
      <View>
        <View style={styles.letterContainer}>
          <TVTouchableFeedback
            style={styles.letterButton}
            focusStyles={styles.letterButtonFocus}
            activeOpacity={1}
            onPress={toggleShowSymbols}
          >
            <Text style={styles.letterText}>123</Text>
          </TVTouchableFeedback>
          {Language.letters.map(letter => {
            return (
              <TVTouchableFeedback
                style={styles.letterButton}
                focusStyles={styles.letterButtonFocus}
                activeOpacity={1}
                key={letter}
                onPress={addLetter(letter)}
              >
                <Text style={styles.letterText}>{letter.toUpperCase()}</Text>
              </TVTouchableFeedback>
            );
          })}
          <TVTouchableFeedback
            style={styles.letterButton}
            focusStyles={styles.letterButtonFocus}
            activeOpacity={1}
            onPress={addLetter(' ')}
          >
            <Text style={styles.letterText}>{'space'.toUpperCase()}</Text>
          </TVTouchableFeedback>
          <TVTouchableFeedback
            style={styles.letterButton}
            focusStyles={styles.letterButtonFocus}
            activeOpacity={1}
            onPress={backspace}
          >
            <Text style={styles.letterText}>{'backspace'.toUpperCase()}</Text>
          </TVTouchableFeedback>
          <TVTouchableFeedback
            style={styles.letterButton}
            focusStyles={styles.letterButtonFocus}
            activeOpacity={1}
            onPress={clear}
          >
            <Text style={styles.letterText}>{'clear'.toUpperCase()}</Text>
          </TVTouchableFeedback>
        </View>
        {showSymbols && (
          <View style={styles.letterContainer}>
            {Language.symbols.map(letter => {
              return (
                <TVTouchableFeedback
                  style={styles.letterButton}
                  focusStyles={styles.letterButtonFocus}
                  activeOpacity={1}
                  key={letter}
                  onPress={addLetter(letter)}
                >
                  <Text style={styles.letterText}>{letter.toUpperCase()}</Text>
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
