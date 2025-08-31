import { logos } from './logos'
import { texts } from './texts'

export type SkillArea = {
  area: string
  textLong: JSX.Element
  textmedium?: JSX.Element
  textShort: JSX.Element
  logosMain: { name: string; logo: JSX.Element }[]
  logosSecondary: { name: string; logo: JSX.Element }[]
}

export const skillAreas: SkillArea[] = [
  {
    area: 'Full Stack',
    textLong: texts.fullStack.long,
    textmedium: texts.fullStack.medium,
    textShort: texts.fullStack.short,
    logosMain: logos.fullStack.main,
    logosSecondary: logos.fullStack.secondary,
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
]
