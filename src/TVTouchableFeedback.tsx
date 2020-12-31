import React from 'react';
import { StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

interface TVTouchableFeedbackProps extends TouchableOpacityProps {
  focusStyles?: StyleProp<ViewStyle>;
}

interface TVTouchableFeedbackState {
  focused: boolean;
}

export default class TVTouchableFeedback extends React.Component<TVTouchableFeedbackProps, TVTouchableFeedbackState> {
  state = {
    focused: false,
  };

  onFocus = () => {
    this.setState({ focused: true });
  };

  onBlur = () => {
    this.setState({ focused: false });
  };

  onPress = (event: any) => {
    if (event.eventType === 'select' && event.eventKeyAction && this.props.onPress) {
      this.props.onPress(event);
    }
  };

  render() {
    const { style, focusStyles = {}, ...props } = this.props;
    return (
      <TouchableOpacity
        {...props}
        style={[style, this.state.focused ? focusStyles : {}]}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onPress={this.onPress}
      />
    );
  }
}
