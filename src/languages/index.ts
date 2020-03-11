import EN from './en';

export interface LanguagePack {
  letters: string[];
  symbols?: string[];
}

const languages: { [name: string]: LanguagePack } = {
  EN,
};

export default function lang(language: keyof typeof languages = 'EN') {
  if (languages[language]) {
    return languages[language];
  }
  return languages.EN;
}
