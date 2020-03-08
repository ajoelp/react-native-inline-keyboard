import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import InlineKeyboard from 'react-native-inline-keyboard';

export default function App() {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.container}>
      <InlineKeyboard value={value} onChange={setValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
