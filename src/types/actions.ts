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
  nft_day_id: number | string;
  nft_month_id: number | string;
  nft_year_id: number | string;
  celebrity_id: number | string;
};

export type PredictionCraftingParams = {
  nft_identity_id: number | string;
  nft_trigger_id: number | string;
};
