import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import TVTouchableFeedback from './TVTouchableFeedback';

interface LetterButtonProps {
  letterButtonStyles?: StyleProp<ViewStyle>;
  letterButtonFocusStyles?: StyleProp<ViewStyle>;
  letterButtonTextStyles?: StyleProp<TextStyle>;
  onPress(event: GestureResponderEvent): any;
  testID?: string;
}

const LetterButton: React.FC<LetterButtonProps> = ({
  children,
  letterButtonStyles,
  letterButtonFocusStyles,
  letterButtonTextStyles,
  onPress,
  testID,
}) => {
  return (
    <TVTouchableFeedback
      style={letterButtonStyles}
      focusStyles={letterButtonFocusStyles}
      activeOpacity={1}
      onPress={onPress}
      testID={testID}
    >
      <Text style={letterButtonTextStyles}>{children}</Text>
    </TVTouchableFeedback>
  );
};

export default LetterButton;
