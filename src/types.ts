export interface GameData {
  nbHts: number;
  data: Game[];
}

export interface Game {
  id: number;
  gameName: string;
  platform: string;
  createdAt: Date;
  updatedAt: Date;
  stores: Store[];
  infoGame: InfoGameReduced[];
}

export interface GameDetails {
  id: number;
  gameName: string;
  platform: string;
  createdAt: Date;
  updatedAt: Date;
  stores: Store[];
  infoGame: InfoGame[];
}

export interface InfoGameReduced {
  id: number;
  name: string;
  first_release_date: string;
  storyline: string;
  summary: string;
  version_title: string;
  cover: Cover;
  genres: NameIdClass[];
  keywords: NameIdClass[];
  platforms: PlatformElement[];
}

export interface InfoGame {
  id: number;
  name: string;
  first_release_date: string;
  storyline: string;
  summary: string;
  version_title: string;
  createdAt: Date;
  updatedAt: Date;
  cover: Cover;
  alternative_names: AlternativeName[];
  artworks: Cover[];
  game_engines: NameIdClass[];
  genres: NameIdClass[];
  involved_companies: InvolvedCompany[];
  keywords: NameIdClass[];
  platforms: PlatformElement[];
  videos: Video[];
}

export interface AlternativeName {
  alternative_name_id: number;
  info_game_id: number;
}

export interface Cover {
  id: number;
  height: number;
  url: string;
  width: number;
  image_id: string;
  info_game_id: number;
}

export interface NameIdClass {
  id: number;
  name: string;
}

export interface InvolvedCompany {
  id: number;
  developer: boolean;
  porting: boolean;
  publisher: boolean;
  supporting: boolean;
  company_id: number;
  info_game_id: number;
  company: Company;
}

export interface Company {
  id: number;
  country: number | null;
  name: string;
  start_date: string;
  logo: Cover;
}

export interface PlatformElement {
  platform_id: number;
  info_game_id: number;
  platform: PlatformPlatform;
}

export interface PlatformPlatform {
  id: number;
  abbreviation: string;
  alternative_name: null | string;
  name: string;
}

export interface Video {
  id: number;
  name: string;
  video_id: string;
  info_game_id: number;
}

export enum StoreTypes {
  STEAM_STORE = "Steam",
  XBOX_STORE = "Xbox",
  EPIC_STORE = "Epic",
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

export interface Store {
  id: number;
  storeIdGame: string;
  store: string;
  type: string;
  url: string;
  imgStore: string;
  edition: string;
  gamepass: boolean | null;
  createdAt: Date;
  updatedAt: Date;
  game_id: number;
  info: Info[];
}

export interface Info {
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
