import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import TVTouchableFeedback from '../TVTouchableFeedback';

describe('TVTouchableFeedback', function() {
  it('will render the component', () => {
    const wrapper = render(<TVTouchableFeedback />);
    expect(wrapper).toBeDefined();
  });

  it('will render the children', () => {
    const text = 'sample-text';
    const wrapper = render(
      <TVTouchableFeedback>
        <Text>{text}</Text>
      </TVTouchableFeedback>
    );
    expect(wrapper.findByText(text)).toBeDefined();
  });

  it('will will emit onPress event', () => {
    const press = jest.fn();

    const wrapper = render(
      <TVTouchableFeedback testID="touchable" onPress={press} />
    );
    fireEvent.press(wrapper.getByTestId('touchable'), {
      eventType: 'select',
      eventKeyAction: true,
    });
    expect(press).toHaveBeenCalled();
  });
});
