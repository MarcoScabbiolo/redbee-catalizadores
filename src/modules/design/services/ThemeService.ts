import { Colors, Theme } from '../domain'

export class ThemeService {
  get colors(): Colors {
    return {
      primary: '#1C6AE8',
      text: '#021430',
      background: '#FFF',
      onPrimary: '#FFF',
    }
  }

  get theme(): Theme {
    return {
      colors: this.colors,
      borderRadius: 8,
    }
  }
}
