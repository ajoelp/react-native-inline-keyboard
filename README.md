# React Native Inline Keyboard
![Lint & Test](https://github.com/ajoelp/react-native-inline-keyboard/workflows/Lint%20&%20Test/badge.svg?branch=master)
[![npm version](https://badge.fury.io/js/react-native-inline-keyboard.svg)](https://badge.fury.io/js/react-native-inline-keyboard)


Inline keyboard for React Native TV Applications

![Inline Keyboard Screenshot](./images/screenshot.png)

## Installation

```sh
npm install react-native-inline-keyboard
```

## Usage

```jsx
import InlineKeyboard from "react-native-inline-keyboard";

// ...

<InlineKeyboard value={value} onChange={(value) => console.log(value)} />
```

### Props

| Prop | Type |
|------|------|
|value | `string` |
|onChange | `function (value: string`)|
|showInput | `boolean` |
|letterContainerStyles | `StyleProp<ViewStyle>` |
|letterButtonStyles | `StyleProp<ViewStyle>` |
|letterButtonFocusStyles | `StyleProp<ViewStyle>` |
|letterButtonTextStyles | `StyleProp<TextStyle>` |

## License

MIT
