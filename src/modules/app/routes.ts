export const enum TabRoutes {
  Home = 'tab-home',
  Discover = 'tab-discover',
  Profile = 'tab-profile',
}

export const enum HomeRoutes {
  Home = 'home',
  MyChallenges = 'my-challenges',
}

export const enum DiscoverRoutes {
  Discover = 'discover',
}

export const enum ProfileRoutes {
  Profile = 'profile',
}

export type TabRoutesParamList = {
  [TabRoutes.Home]: undefined
  [TabRoutes.Discover]: undefined
  [TabRoutes.Profile]: undefined
}

export type HomeRoutesParamList = {
  [HomeRoutes.Home]: undefined
  [HomeRoutes.MyChallenges]: undefined
}

export type DiscoverRoutesParamList = {
  [DiscoverRoutes.Discover]: undefined
}

export type ProfileRoutesParamList = {
  [ProfileRoutes.Profile]: undefined
}
