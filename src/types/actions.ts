export type LoginParams = {
  username: string;
  password: string;
};

export type RegisterParams = {
  username: string;
  password: string;
  email: string;
};

export type MarketplaceListObjectParams = {
  nft_collection_id?: number;
  nft_id?: number;
  id?: number;
  owner_id?: number;
  price?: number;
  created_at?: number | string | Date;
  is_listed?: boolean;
};

export type IdentityCraftingParams = {
  nft_card_day_month_id: number | string;
  nft_card_crafting_id: number | string;
  nft_card_year_id: number | string;
  celebrity_id: number | string;
};

export type PredictionCraftingParams = {
  nft_card_identity_id: number | string;
  nft_card_trigger_ids: Array<number | string>;
  nft_card_crafting_id: number | string;
};

/////////////////////////////////////

export type IArticle = {
  id?: number;
  excerpt?: string;
  created_at?: number | string;
  claim?: IClaim[];
  article_source_id?: number;
  url?: string;
  thumbnail_src?: string;
  title?: string;
  tags?: string[];
  article_source?: IArticleSource;
};

export type IClaim = {
  id?: number;
  status?: number;
  created_at?: number | string | Date;
  claimer_id?: number;
  nft_prediction_id?: number;
  article_id?: number;
  claimer?: IUser;
  article?: IArticle;
};

export interface IUser {
  created_at?: number | string | Date;
  password?: string;
  external_auth_id?: string;
  claim?: IClaim[];
  marketplace_listing?: IMarketplaceListing[];
  id?: number;
  username?: string;
  email?: string;
  wallet_address?: string;
  role_ids?: number[];
}

export interface IMarketplaceListing {
  nft_collection_id?: number;
  nft_id?: number;
  owner?: IUser;
  id?: number;
  owner_id?: number;
  price?: number;
  created_at?: number | string | Date;
  is_listed?: boolean;
}

export interface IArticleSource {
  id?: number;
  name?: string;
  article?: IArticle[];
}
