export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}
export interface FeaturedGames {
  feature: string;
  games: Game[];
}
export interface GameData {
  nbHts: number;
  data: Game[];
}

interface BaseFilters {
  nbHts: number;
}
export interface GenresFilter extends BaseFilters {
  genres: string[];
}
export interface CategoriesFilter extends BaseFilters {
  categories: string[];
}

export interface FiltersData {
  nbHts: number;
  currentPage: number;
  totalGames: 121;
  totalPages: 13;
  games: Game[];
}

export interface Game {
  id: number;
  gameName: string;
  platform: string;
  createdAt: Date;
  updatedAt: Date;
  stores: StoreReduced[];
}

export interface GameDetails {
  id: number;
  gameName: string;
  platform: string;
  createdAt: Date;
  updatedAt: Date;
  stores: StoreComplete[];
}

export interface InfoGameReduced {
  id: number;
  storeIdGame: string;
  imgStore: string;
  genres: string[];
  categories: string[];
  about: string;
  description: string;
  release_date: string;
}

export interface InfoGame {
  id: number;
  storeIdGame: string;
  imgStore: string;
  genres: string[];
  categories: string[];
  about: string;
  description: string;
  release_date: string;
  developer: string;
  publisher: string;
  pc_requirements?: {
    id: number;
    minimum: string;
    recommended: string;
  };
  screenshots: Screenshot[];
  supportedLanguages?: string;
  videos: Video[];
  website: string;
  ratings: Rating[] | null;
}

export interface Rating {
  id: number;
  name: string;
  descriptors: string;
  imageUrl: string | null;
  rating: string;
}
export interface Screenshot {
  id: number;
  url: string;
  thumbUrl: string;
  info_game_id: number;
}

export interface Video {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
  info_game_id: number;
}

export enum StoreTypes {
  STEAM_STORE = "Steam",
  XBOX_STORE = "Xbox",
  EPIC_STORE = "Epic",
}

export enum SteamImageSizes {
  CAPSULE = "capsule_616x353",
  HERO_CAPSULE = "hero_capsule",
}

export interface StoreReduced {
  id: number;
  store: string;
  type: string;
  url: string;
  edition: string;
  gamepass: boolean | null;
  createdAt: Date;
  updatedAt: Date;
  game_id: number;
  info_price: InfoPrice;
  info_game: InfoGameReduced;
}
export interface StoreComplete {
  id: number;
  storeIdGame: string;
  store: string;
  type: string;
  url: string;
  edition: string;
  gamepass: boolean | null;
  createdAt: Date;
  updatedAt: Date;
  game_id: number;
  info_price: InfoPrice;
  info_game: InfoGame;
}

export interface InfoPrice {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  discount_percent: string;
  initial_price: string;
  final_price: string;
  offer_end_date: Date | null;
  currency: string;
  store_game_id: number;
}

export interface StoreStyles {
  cardBackground: string;
  hoverCardBackground: string;
  offerBackground: string;
  offerFontColor: string;
  cardFontColor: string;
  normalpriceColor: string;
  initialPriceColor: string;
}

export enum ImgSizes {
  NONE = "none",
  COVER_SMALL = "cover_small", // 35x35
  LOGO_MED = "logo_med", // 284 x 160
  COVER_BIG = "cover_big", // 264x374
  COVER_BIG_2X = "cover_big_2x", //
  SCREENSHOT_MED = "screenshot_med", // 669 x 320
  SCREENSHOT_BIG = "screenshot_huge", // 1280x720 lfill
  HD_720_p = "720p", // 1280x720 fit
  HD_720_p_2X = "720p_2x", // 1280x720 fit
}
