export enum TabRoutes {
  Home = 'tab-home',
  Discover = 'tab-discover',
  Profile = 'tab-profile',
}

export enum HomeRoutes {
  Home = 'home',
}

export enum DiscoverRoutes {
  Discover = 'discover',
}

export enum ProfileRoutes {
  Profile = 'profile',
}

export type TabRoutesParamList = {
  [TabRoutes.Home]: undefined
  [TabRoutes.Discover]: undefined
  [TabRoutes.Profile]: undefined
}

export type HomeRoutesParamList = {
  [HomeRoutes.Home]: undefined
}

export type DiscoverRoutesParamList = {
  [DiscoverRoutes.Discover]: undefined
}

export type ProfileRoutesParamList = {
  [ProfileRoutes.Profile]: undefined
}
