import { Colors, Theme } from '../domain'

export class ThemeService {
  get colors(): Colors {
    return {
      primary: '#1C6AE8',
      primaryLight: '#5a8de0',
      text: '#021430',
      background: '#FFF',
      onPrimary: '#FFF',
      success: '#14a31d',
    }
  }

  get theme(): Theme {
    return {
      colors: this.colors,
      borderRadius: 8,
    }
  }
}
