import { logos } from './logos';
import { texts } from './texts';

export type SkillArea = {
  area: string;
  textLong: JSX.Element;
  textmedium?: JSX.Element;
  textShort: JSX.Element;
  logosMain: { name: string; logo: JSX.Element }[];
  logosSecondary: { name: string; logo: JSX.Element }[];
};

export const skillAreas: SkillArea[] = [
  {
    area: 'Intro',
    textLong: texts.intro.long,
    textmedium: texts.intro.medium,
    textShort: texts.intro.short,
    logosMain: logos.intro.main,
    logosSecondary: logos.intro.secondary,
  },
  {
    area: 'Frontend',
    textLong: texts.frontend.long,
    textmedium: texts.frontend.medium,
    textShort: texts.frontend.short,
    logosMain: logos.frontend.main,
    logosSecondary: logos.frontend.secondary,
  },
  {
    area: 'Backend',
    textLong: texts.backend.long,
    textmedium: texts.backend.long,
    textShort: texts.backend.short,
    logosMain: logos.backend.main,
    logosSecondary: logos.backend.secondary,
  },
];
