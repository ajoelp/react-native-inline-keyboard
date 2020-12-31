import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Keyboard from '../Keyboard';
import Language from '../languages/en';
import { LanguagePack } from '../languages';

describe('Keyboard', function() {
  it('will render the component', () => {
    const wrapper = render(<Keyboard value={''} onChange={() => {}} />);
    expect(wrapper).toBeDefined();
  });

  it('will show letters', async () => {
    const wrapper = render(<Keyboard value={''} onChange={() => {}} />);

    for (let letter of Language.letters) {
      expect(wrapper.getByTestId(`letter-${letter}`)).toBeDefined();
    }
  });

  it('will show symbols', async () => {
    const wrapper = render(<Keyboard value={''} onChange={() => {}} />);

    fireEvent.press(wrapper.getByTestId('symbols-button'), {
      eventType: 'select',
      eventKeyAction: true,
    });

    for (let symbol of Language.symbols) {
      expect(wrapper.getByTestId(`symbol-${symbol}`)).toBeDefined();
    }
  });

  it('will show uppercase letters', async () => {
    const wrapper = render(<Keyboard value={''} onChange={() => {}} />);

    fireEvent.press(wrapper.getByTestId('text-transform-button'), {
      eventType: 'select',
      eventKeyAction: true,
    });

    for (let letter of Language.symbols) {
      expect(wrapper.getByTestId(`letter-${letter}`)).toBeDefined();
    }
  });

  it('will add letters to value', () => {
    const press = jest.fn();
    const wrapper = render(<Keyboard value={'a'} onChange={press} />);

    fireEvent.press(wrapper.getByTestId(`letter-a`), {
      eventType: 'select',
      eventKeyAction: true,
    });

    expect(press).toHaveBeenCalledWith('aa');
  });

  it('will remove letter from value', () => {
    const press = jest.fn();
    const wrapper = render(<Keyboard value={'a'} onChange={press} />);

    fireEvent.press(wrapper.getByTestId(`delete-button`), {
      eventType: 'select',
      eventKeyAction: true,
    });

    expect(press).toHaveBeenCalledWith('');
  });

  it('will add a space to the value', () => {
    const press = jest.fn();
    const wrapper = render(<Keyboard value={'a'} onChange={press} />);

    fireEvent.press(wrapper.getByTestId(`space-button`), {
      eventType: 'select',
      eventKeyAction: true,
    });

    expect(press).toHaveBeenCalledWith('a ');
  });

  describe('Custom language pack', () => {
    const language: LanguagePack = {
      letters: ['z', 'f', 'd'],
      symbols: ['s', 't', 'y'],
    };

    it('will show letters', async () => {
      const wrapper = render(
        <Keyboard value={''} onChange={() => {}} language={language} />
      );

      for (let letter of language.letters) {
        expect(wrapper.getByTestId(`letter-${letter}`)).toBeDefined();
      }
    });

    it('will show symbols', async () => {
      const wrapper = render(
        <Keyboard value={''} onChange={() => {}} language={language} />
      );

      fireEvent.press(wrapper.getByTestId('symbols-button'), {
        eventType: 'select',
        eventKeyAction: true,
      });

      for (let symbol of language.symbols!) {
        expect(wrapper.getByTestId(`symbol-${symbol}`)).toBeDefined();
      }
    });
  });

  describe('Language pack with no symbols', () => {
    const language: LanguagePack = {
      letters: ['z', 'f', 'd'],
    };

    it('will not show symbols', async () => {
      const wrapper = render(
        <Keyboard value={''} onChange={() => {}} language={language} />
      );

      expect(wrapper.queryByTestId('symbols-button')).toBeFalsy();
    });
  });
});
